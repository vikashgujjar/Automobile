<?php
/**
 * reviews.php — Google Reviews proxy for AutoCraft (Places API, server-side)
 * ---------------------------------------------------------------------------
 * WHY: the API key must never sit in front-end JS. This script calls Google
 * server-side, CACHES the result to a local file (so you don't burn quota or
 * hit rate limits), and returns clean JSON the website can render.
 *
 * NOTE: the Google Places API returns a MAXIMUM OF 5 reviews ("most relevant"
 * or newest). To show ALL reviews you need the Google Business Profile API
 * (owner OAuth + approval) or a widget like Featurable. See the chat notes.
 *
 * SETUP (one time):
 *   1. Google Cloud Console -> create/select a project.
 *   2. Enable "Places API" and enable BILLING (free $200/mo credit covers this).
 *   3. APIs & Services -> Credentials -> create an API key.
 *      Restrict it: API restriction = Places API. (For server use, also add an
 *      Application restriction by your server's IP address if you have a static IP.)
 *   4. Find your Place ID: https://developers.google.com/maps/documentation/places/web-service/place-id
 *      (paste the business name into the Place ID Finder, or open the Google
 *      Maps listing and copy the ChIJ... id from the URL).
 *   5. Fill GOOGLE_API_KEY and PLACE_ID below, upload this file to your server.
 *   6. Front-end fetches it from REVIEWS_ENDPOINT (default 'reviews.php').
 * ---------------------------------------------------------------------------
 */

// ===================== CONFIG =====================
const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY_HERE';
const PLACE_ID       = 'YOUR_PLACE_ID_HERE';          // e.g. ChIJ....
const CACHE_FILE     = __DIR__ . '/reviews_cache.json';
const CACHE_TTL      = 21600;                           // seconds (6 hours)
const REVIEWS_SORT   = 'newest';                        // 'newest' or 'most_relevant'
const LANGUAGE       = 'en';
const ALLOW_ORIGIN   = '*';                             // tighten to 'https://yourdomain.com' in production
// ==================================================

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . ALLOW_ORIGIN);
header('Cache-Control: public, max-age=' . CACHE_TTL);

/** Serve a cached response if it is still fresh. */
function serve_cache_if_fresh() {
    if (is_readable(CACHE_FILE) && (time() - filemtime(CACHE_FILE)) < CACHE_TTL) {
        $cached = file_get_contents(CACHE_FILE);
        if ($cached !== false && $cached !== '') {
            echo $cached;
            return true;
        }
    }
    return false;
}

/** Serve a stale cache (better than nothing) when a live fetch fails. */
function serve_stale_cache_or_error($msg) {
    if (is_readable(CACHE_FILE)) {
        $cached = file_get_contents(CACHE_FILE);
        if ($cached !== false && $cached !== '') { echo $cached; return; }
    }
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => $msg, 'reviews' => []]);
}

if (serve_cache_if_fresh()) {
    exit;
}

if (GOOGLE_API_KEY === 'YOUR_GOOGLE_API_KEY_HERE' || PLACE_ID === 'YOUR_PLACE_ID_HERE') {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Set GOOGLE_API_KEY and PLACE_ID in reviews.php', 'reviews' => []]);
    exit;
}

// ---- Build the Place Details request ----
$endpoint = 'https://maps.googleapis.com/maps/api/place/details/json?' . http_build_query([
    'place_id'      => PLACE_ID,
    'fields'        => 'name,rating,user_ratings_total,reviews,url',
    'reviews_sort'  => REVIEWS_SORT,
    'language'      => LANGUAGE,
    'key'           => GOOGLE_API_KEY,
]);

// ---- Fetch (cURL preferred, fall back to file_get_contents) ----
$raw = null;
if (function_exists('curl_init')) {
    $ch = curl_init($endpoint);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);
    $raw = curl_exec($ch);
    curl_close($ch);
} else {
    $raw = @file_get_contents($endpoint);
}

if ($raw === false || $raw === null) {
    serve_stale_cache_or_error('Could not reach Google Places API');
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data) || ($data['status'] ?? '') !== 'OK') {
    serve_stale_cache_or_error('Google API status: ' . ($data['status'] ?? 'UNKNOWN'));
    exit;
}

$result = $data['result'] ?? [];

// ---- Normalise into the shape the front-end expects ----
$reviews = [];
foreach (($result['reviews'] ?? []) as $r) {
    $reviews[] = [
        'author' => $r['author_name'] ?? 'Google user',
        'photo'  => $r['profile_photo_url'] ?? '',
        'rating' => $r['rating'] ?? 5,
        'time'   => $r['relative_time_description'] ?? '',
        'text'   => trim($r['text'] ?? ''),
        'url'    => $r['author_url'] ?? '',
    ];
}

$payload = json_encode([
    'ok'       => true,
    'name'     => $result['name'] ?? '',
    'rating'   => $result['rating'] ?? null,
    'total'    => $result['user_ratings_total'] ?? null,
    'mapsUrl'  => $result['url'] ?? '',
    'reviews'  => $reviews,
    'fetchedAt'=> date('c'),
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

// ---- Cache + return ----
@file_put_contents(CACHE_FILE, $payload, LOCK_EX);
echo $payload;
