import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Jura } from "next/font/google";
import { ReactNode } from "react";

const jura = Jura({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Caju Code - Mentoria e Consultoria",
  description:
    "Transformamos suas ideias em soluções digitais incríveis. Desenvolvimento web moderno, apps mobile e consultoria tech.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={jura.className}>{children}</body>
    </html>
  );
}
