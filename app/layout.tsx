import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Kelompok",
  description: "Kelompok personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
