import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kim Hyeon-soo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 max-[820px]:text-[14px]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
