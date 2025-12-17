import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ShoppingCart, Menu, Guitar } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guitar Pasal - Unleash Your Sound',
  description: 'Premium guitars and musical equipment with a dark metal aesthetic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800 backdrop-blur-sm bg-opacity-95">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Guitar className="w-8 h-8 text-red-800" strokeWidth={2.5} />
                <span className="text-2xl font-bold tracking-wider text-neutral-100 uppercase">
                  Guitar Pasal
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-neutral-400 hover:text-neutral-100 transition-colors uppercase text-sm font-semibold tracking-wide">
                  Guitars
                </a>
                <a href="#" className="text-neutral-400 hover:text-neutral-100 transition-colors uppercase text-sm font-semibold tracking-wide">
                  Basses
                </a>
                <a href="#" className="text-neutral-400 hover:text-neutral-100 transition-colors uppercase text-sm font-semibold tracking-wide">
                  Amps
                </a>
                <a href="#" className="text-neutral-400 hover:text-neutral-100 transition-colors uppercase text-sm font-semibold tracking-wide">
                  Accessories
                </a>
              </div>

              {/* Cart and Menu */}
              <div className="flex items-center space-x-4">
                <button className="p-2 text-neutral-400 hover:text-neutral-100 transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                </button>
                <button className="p-2 md:hidden text-neutral-400 hover:text-neutral-100 transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-neutral-950 border-t border-neutral-800 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-neutral-100 mb-4 uppercase tracking-wide">About</h3>
                <p className="text-neutral-400 text-sm">
                  Guitar Pasal is your destination for premium musical equipment with a dark, industrial edge.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-100 mb-4 uppercase tracking-wide">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-neutral-400 hover:text-neutral-100 transition-colors">Shop</a></li>
                  <li><a href="#" className="text-neutral-400 hover:text-neutral-100 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-neutral-400 hover:text-neutral-100 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-100 mb-4 uppercase tracking-wide">Connect</h3>
                <p className="text-neutral-400 text-sm">
                  Follow us for the latest gear and riffs.
                </p>
              </div>
            </div>
            <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
              © 2024 Guitar Pasal. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
