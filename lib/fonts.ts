import { Geist, Geist_Mono, Major_Mono_Display, K2D } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const majorMono = Major_Mono_Display({
  variable: "--font-major-mono",
  weight: "400",
  subsets: ["latin"],
});

export const k2d = K2D({
  variable: "--font-k2d",
  weight: ["100", "400", "500", "600", "700"],
  subsets: ["latin"],
});
