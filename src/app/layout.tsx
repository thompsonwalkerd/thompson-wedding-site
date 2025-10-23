import type { Metadata } from "next";
import { Poltawski_Nowy, Montserrat } from "next/font/google";
import "./globals.css";

const poltawskiNowy = Poltawski_Nowy({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],  // latin-ext includes Polish characters
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thompson Wedding",
  description: "Wedding Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poltawskiNowy.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
