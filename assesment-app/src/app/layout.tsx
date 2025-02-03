import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Assessment App",
  description: "Plataforma de evaluación para participantes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Imagen de fondo global */}
        <Image
          src="/background.svg"
          alt="Background"
          fill
          quality={100}
          style={{
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
