import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`antialiased bg-purple-600`}>{children}</body>
    </html>
  );
}
