import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0B1120",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Webora — Web Solutions Built to Last",
  description: "Professional web solutions for small and medium businesses in Sarajevo and beyond. Clean design, fast delivery, real results.",
  openGraph: {
    title: "Webora — Web Solutions Built to Last",
    description: "Professional web solutions for small and medium businesses in Sarajevo and beyond. Clean design, fast delivery, real results.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Webora — Web Solutions Built to Last" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${outfit.variable} antialiased`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}