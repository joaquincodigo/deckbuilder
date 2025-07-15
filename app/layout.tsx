import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`antialiased bg-purple-600 z-0`}>{children}</body>
    </html>
  );
}
