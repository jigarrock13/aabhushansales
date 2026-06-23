import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aabhushan Sales Rajkot | Micro Imitation Jewellery",
  description:
    "Aabhushan Sales catalogue experience for micro imitation jewellery, bangles, earrings, gifting, bridal styles, and occasion-ready accessories in Rajkot."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
