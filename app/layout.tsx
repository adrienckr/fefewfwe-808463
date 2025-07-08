import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Plumbing Services",
  description: "Expert plumbing services you can trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}