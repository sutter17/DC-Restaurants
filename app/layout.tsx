import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "DC Restaurants",
  description: "Explore menus, happy hours, and compare DC restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 antialiased">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
            <Link href="/" className="font-bold text-lg tracking-tight text-orange-600 shrink-0">
              DC&nbsp;Restaurants
            </Link>
            <nav className="flex items-center gap-1 text-sm font-medium">
              <Link
                href="/"
                className="px-3 py-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Restaurants
              </Link>
              <Link
                href="/items"
                className="px-3 py-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Find an Item
              </Link>
              <Link
                href="/compare"
                className="px-3 py-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Compare
              </Link>
              <Link
                href="/happy-hours"
                className="px-3 py-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Happy Hours
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>DC Restaurants — Menu &amp; Price Tracker</span>
            <span>Prices shown may not reflect current offerings. Always verify with the restaurant.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
