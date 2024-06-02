import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import '@styles/reset.css'
import '@styles/main.scss'
import { Footer, Header } from "@/components";
import favicon from '@/../public/favicon.ico'

const poppins = Poppins({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Aperture",
  description: "Photographers Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
        <meta name="theme-color" content="#000000"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
      </head>
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
