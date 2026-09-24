import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Hamada | Full Stack Developer",
  description:
    "Landing page pessoal de Matheus Hamada, desenvolvedor fullstack focado em C# e .NET no backend e no ecossistema JavaScript (React, Next.js, Node.js e NestJS).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
