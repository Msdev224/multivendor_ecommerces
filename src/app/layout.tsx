// Next.js
import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";

// Global css
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description: "ienvenue sur GoShop, votre marketplace en ligne dédiée à une expérience d'achat simple, rapide et sécurisée. Découvrez une large sélection de produits proposés par des vendeurs de confiance, comparez les prix, profitez de bonnes affaires et faites-vous livrer facilement. Mode, électronique, beauté, maison, alimentation et bien plus encore : GoShop réunit plusieurs vendeurs et des milliers de produits sur une seule plateforme.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} h-full antialiased`}
    >
        <body className="min-h-screen w-full flex flex-col font-barlow">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
