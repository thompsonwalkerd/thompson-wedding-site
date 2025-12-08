import type { Metadata } from 'next';
import { Cormorant_Garamond, Raleway, Luxurious_Script } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const raleway = Raleway({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const luxuriousScript = Luxurious_Script({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Thompson Wedding',
  description: 'Thompson Wedding Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${cormorantGaramond.variable} ${raleway.variable} ${luxuriousScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
