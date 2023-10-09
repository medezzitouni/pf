import { withBasPath } from '@/lib/constants';
import 'animate.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mohammed Ezzitouni portfolio",
  themeColor: '#ffffff',
  manifest: withBasPath('/site.webmanifest'),
  icons: {
    icon: [
      {
        url: withBasPath("/favicon-32x32.png"),
        type: "image/png",
        sizes: "32x32",
        // color: ,
        /** defaults to rel="icon" unless superseded by Icons map */
        // rel?: string;
        // media?: string;
      },
      {
        url: withBasPath("/favicon-32x32.png"),
        type: "image/png",
        sizes: "16x16",
        // color: ,
        /** defaults to rel="icon" unless superseded by Icons map */
        // rel?: string;
        // media?: string;
      },
      {
        url: withBasPath("/apple-touch-icon.png"),
        sizes: "180x180",
        // color: ,
        /** defaults to rel="icon" unless superseded by Icons map */
        rel: 'apple-touch-icon',
        // media?: string;
      },
      {
        url: withBasPath('/safari-pinned-tab.svg'),
        color: '#5bbad5',
        /** defaults to rel="icon" unless superseded by Icons map */
        rel: 'mask-icon',
        // media?: string;
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('layout');
  
  return (
    <html lang="en" className={inter.className}>
      <script src="https://kit.fontawesome.com/c5930a752e.js" async ></script>
      {children}
    </html>
  );
}
