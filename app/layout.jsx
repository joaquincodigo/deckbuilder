import "./globals.css";
import localFont from "next/font/local";
import { ToastManager } from "@/app/components/modals/ToastManager";

const MatrixEffect = localFont({
  src: "./fonts/MatrixEffect.ttf",
  variable: "--font-matrix-effect",
  weight: "400",
});

const MatrixCardName = localFont({
  src: "./fonts/MatrixCardName.ttf",
  variable: "--font-matrix-card-name",
  weight: "400",
});

const MatrixCardType = localFont({
  src: "./fonts/MatrixCardType.ttf",
  variable: "--font-matrix-card-type",
  weight: "400",
});

const MatrixItalic = localFont({
  src: "./fonts/MatrixItalic.ttf",
  variable: "--font-matrix-italic",
  weight: "400",
});

export default function RootLayout({ children }) {
  const styles = {
    body: `antialiased bg-purple-600 z-0 ${MatrixEffect.className} ${MatrixCardName.variable} ${MatrixCardType.variable} ${MatrixItalic.variable}`,
  };

  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
      <ToastManager />
    </html>
  );
}
