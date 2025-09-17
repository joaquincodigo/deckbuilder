import "./globals.css";
import localFont from "next/font/local" 
import { ToastManager } from "@/app/components/modals/ToastManager";

import localFont from 'next/font/local'
 
const MatrixEffect = localFont({
  src: './fonts/MatrixEffect.ttf',
})

export default function RootLayout({ children }) {

const styles = {
  body: `antialiased bg-purple-600 z-0 ${MatrixEffect.className}`
}

  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
      <ToastManager />
    </html>
  );
}