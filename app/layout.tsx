import type { Metadata } from "next";
import { Geist, Geist_Mono, Freckle_Face } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const freckleFace = Freckle_Face({
  variable: "--font-freckle-face",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitcoin Onboarding Leaderboard",
  description: "Track community members competing to onboard local small businesses to Bitcoin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${freckleFace.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
