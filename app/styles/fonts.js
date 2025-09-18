import localFont from "next/font/local";

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

const MatrixEffect = localFont({
  src: "./fonts/MatrixEffect.ttf",
  variable: "--font-matrix-effect",
  weight: "400",
});

const MatrixItalic = localFont({
  src: "./fonts/MatrixItalic.ttf",
  variable: "--font-matrix-italic",
  weight: "400",
});

export { MatrixCardName, MatrixEffect, MatrixCardType, MatrixItalic };
