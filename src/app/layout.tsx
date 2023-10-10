"use client";

import { inter, withBasPath } from '@/lib/constants';
import '@/lib/i18n/config';
import 'animate.css';

import Head from 'next/head';
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Mohammed Ezzitouni portfolio",
//   themeColor: '#ffffff',
//   manifest: withBasPath('/site.webmanifest'),
//   icons: {
//     icon: [
//       {
//         url: withBasPath("/favicon-32x32.png"),
//         type: "image/png",
//         sizes: "32x32",
//         // color: ,
//         /** defaults to rel="icon" unless superseded by Icons map */
//         // rel?: string;
//         // media?: string;
//       },
//       {
//         url: withBasPath("/favicon-16x16.png"),
//         type: "image/png",
//         sizes: "16x16",
//         // color: ,
//         /** defaults to rel="icon" unless superseded by Icons map */
//         // rel?: string;
//         // media?: string;
//       },
//       {
//         url: withBasPath("/apple-touch-icon.png"),
//         sizes: "180x180",
//         // color: ,
//         /** defaults to rel="icon" unless superseded by Icons map */
//         rel: 'apple-touch-icon',
//         // media?: string;
//       },
//       {
//         url: withBasPath('/safari-pinned-tab.svg'),
//         color: '#5bbad5',
//         /** defaults to rel="icon" unless superseded by Icons map */
//         rel: 'mask-icon',
//         // media?: string;
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={inter.className}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Mohammed Ezzitouni portfolio"></meta>
        <link rel="shortcut icon"  href={withBasPath("/favicon-32x32.png")} type="image/png" sizes="32x32" />
        <link rel="shortcut icon"  href={withBasPath("/favicon-16x16.png")} type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon"  href={withBasPath("/apple-touch-icon.png")} type="image/png" sizes="180x180" />
        <link rel="mask-icon"  href={withBasPath('/safari-pinned-tab.svg')} color='#5bbad5' />
        <link rel="manifest" href={withBasPath('/site.webmanifest')} />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <script src="https://kit.fontawesome.com/c5930a752e.js" async ></script>
      {children}
    </html>
  );
}
