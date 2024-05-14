import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/NavBar/Navbar";
import MyBreadcrumb from "@/components/MyBreadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Videodrive",
  description: "Exercice - Videodrive - Boutique de jeux video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="container pt-28">{children}</main>
      </body>
    </html>
  );
}
