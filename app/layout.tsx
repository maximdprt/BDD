import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eugenia Challenge",
  description: "Plateforme éducative interactive",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 w-full border-b border-secondary/10 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold text-primary">Eugenia</span>
              <span className="text-xl md:text-2xl font-bold text-secondary">Challenge</span>
            </Link>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-secondary/10 bg-background py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
              <div className="text-xs sm:text-sm text-secondary/70">
                <p className="font-semibold text-secondary mb-1">Eugenia Challenge</p>
                <p>Plateforme éducative interactive</p>
              </div>
              <div className="text-xs sm:text-sm text-secondary/70">
                <p>© 2024 Eugenia Challenge. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

