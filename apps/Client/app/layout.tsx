import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "../provider";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Cleven | Orchestrating Solutions Beyond the Obvious ",
  description: "Generated by create next app",
};
const raleway = Raleway({
  subsets: ["latin-ext"],
  weight: "700",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
      <body className={`bg-[#0c0c0c] dark ${raleway.className}
      `}>
        <Suspense>{children}</Suspense>
      </body>
      </Providers>
    </html>
  );
}
