import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jawad — Full-Stack & React Native Engineer",
  openGraph: { title: "Jawad Ul Hassan — Full-Stack & React Native Engineer", description: "Production web and mobile engineering portfolio." },
    description:
    "Portfolio of Jawad, a Full-Stack and React Native Engineer building production web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
