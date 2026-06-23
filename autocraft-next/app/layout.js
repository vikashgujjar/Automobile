import "./globals.css";

export const metadata = {
  title: "AutoCraft Premium Car Care — Multi-Brand Car Service & Auto Body Shop in Karnataka",
  description:
    "Multi brand car service near me. AutoCraft is a premium car workshop & auto body shop in Karnataka for periodic servicing, denting & painting, 3M ceramic coating, detailing, car computer scanning, key programming, windshield replacement, battery & roadside assistance and luxury car repair.",
  keywords:
    "multi brand car service near me, periodic car servicing center, best multi brand car garage, premium car workshop near me, luxury car repair shop, audi bmw mercedes service center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
