import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Comfortaa, IBM_Plex_Mono } from "next/font/google";
import { env } from "~/env.mjs";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

/*
 *
 *<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
 */

const title = "Is It Content?";
const description =
  "In a world full of content, is your idea it? Find out with our proprietary content evaluation algorithm.";
export const metadata = {
  title,
  description,
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: env.SITE_URL,
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${comfortaa.variable} ${plexMono.variable} flex h-full min-h-screen flex-col items-center bg-gradient-to-b from-black via-black to-violet-950 text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
