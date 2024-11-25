import './globals.css';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mulish.className}>
      <body>{children}</body>
    </html>
  );
}