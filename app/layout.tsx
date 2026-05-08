import type { Metadata } from "next";
import { geistSans, geistMono, majorMono, k2d } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Fahrenheit Research",
  description:
    "We build intelligence at the edge of what is known. Our research becomes product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${majorMono.variable} ${k2d.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex flex-col flex-1">{children}</main>
      </body>
    </html>
  );
}
