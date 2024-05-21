import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/NavBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Videodrive",
  description: "Exercice - Videodrive - Boutique de jeux video",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={
          inter.className +
          " flex min-h-screen flex-col items-center justify-between"
        }
      >
        <Navbar />

        <main className="container w-screen  pt-28">{children}</main>
        <footer className="w-screen rounded-t-md bg-primary py-4 text-center tracking-wide text-secondary shadow-md ">
          <p>&copy; Etienne VAYTILINGOM 2024</p>
        </footer>
      </body>
    </html>
  );
}
