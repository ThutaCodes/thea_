import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thea Solutions",
  description: "Thea Solutions - Expert consulting services for business growth and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-color paragraph-color`} >
        {children}
      </body>
    </html>
  );
}
