import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dress Muse | Dresses for Every Occasion",
    template: "%s | Dress Muse",
  },

  description:
    "Discover beautifully curated dresses for wedding guests, summer days, cocktail events, vacations, and every special occasion.",

  keywords: [
    "women's dresses",
    "wedding guest dresses",
    "summer dresses",
    "cocktail dresses",
    "vacation dresses",
    "Amazon fashion",
    "occasion dresses",
    "dress inspiration",
  ],

  openGraph: {
    title: "Dress Muse | Dresses for Every Occasion",
    description:
      "Discover beautifully curated dresses for weddings, summer, cocktails, vacations, and every special occasion.",
    type: "website",
    siteName: "Dress Muse",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dress Muse | Dresses for Every Occasion",
    description:
      "Curated dress inspiration and fashion finds for every occasion.",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "_ZZPyB5IRHkHv4dTXQ0KLmz15se75NvZebdluqUhB9M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}