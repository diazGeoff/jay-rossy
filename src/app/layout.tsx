import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jay & Rossy",
  description: "Jay and Rossy's wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
