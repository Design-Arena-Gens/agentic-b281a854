import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Medwakh Filters Available",
  description: "Bold square shop sign showcasing Medwakh filters with modern styling."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
