import type { Metadata } from "next";
import { Poppins, Comfortaa, Antic_Didone, Outfit } from "next/font/google";
import "./globals.css";

const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const fontComfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-logo",
});

const fontAnticDidone = Antic_Didone({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "Leela Films — Shaping Culture. Empowering Talent. Telling Indian Stories Globally.",
  description:
    "Leela Films Pvt Ltd is a new-age entertainment and media company creating impactful stories across films, digital content, podcasts, and branded entertainment.",
  keywords: ["Leela Films", "Entertainment Company", "Indian Cinema", "Podcasts", "Digital Content", "Production House"],
  authors: [{ name: "Leela Films Pvt Ltd" }],
  openGraph: {
    title: "Leela Films — Shaping Culture. Empowering Talent. Telling Indian Stories Globally.",
    description:
      "Leela Films Pvt Ltd is a new-age entertainment and media company creating impactful stories across films, digital content, podcasts, and branded entertainment.",
    url: "https://www.leelafilms.com",
    siteName: "Leela Films",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontOutfit.variable} ${fontPoppins.variable} ${fontComfortaa.variable} ${fontAnticDidone.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white selection:bg-brand-red selection:text-white flex flex-col font-body">
        {/* Film grain effect applied site-wide */}
        <div className="film-grain" />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
