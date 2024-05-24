import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/NavBar/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaming Shop",
  description: "Exercice - Boutique de jeux video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />

            <Toaster />
            <main className="container w-screen  pt-28">{children}</main>
            <footer className="w-screen rounded-t-md bg-primary py-4 text-center tracking-wide shadow-md ">
              <p>&copy; Etienne VAYTILINGOM 2024</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
