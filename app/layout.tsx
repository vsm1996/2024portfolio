import type { Metadata } from "next";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Vanessa Martin - Fullstack Web Developer",
  description: "Portfolio Site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lochmara">
      <body className={clsx(poppins.className, 'bg-accent-content')}>
        <main className=''>
          <Suspense fallback={<p>Looooader</p>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
