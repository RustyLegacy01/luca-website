import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "luca@terminal:~$",
  description: "CS & Economics Student | Bridging code and markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="crt antialiased grid-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}
