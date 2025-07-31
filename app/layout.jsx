import "./globals.css";
import { ToastManager } from "@/app/components/modals/ToastManager";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-purple-600 z-0">{children}</body>
      <ToastManager />
    </html>
  );
}
