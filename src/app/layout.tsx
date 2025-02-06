import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axios Front",
  description: "Project developed to Axios test dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
