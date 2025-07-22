import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-purple-600 z-0">{children}</body>
    </html>
  );
}
