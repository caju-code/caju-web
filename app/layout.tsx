import { ReactNode } from "react";
import type { Metadata } from "next";
import { Jura, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-rubik",
});

const jura = Jura({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-jura",
});

export const metadata: Metadata = {
  title: "Caju Code - Mentoria e Consultoria",
  description:
    "Oferecemos soluções completas para transformar sua visão em realidade digital.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${rubik.variable} ${jura.variable}`}>{children}</body>
    </html>
  );
}
