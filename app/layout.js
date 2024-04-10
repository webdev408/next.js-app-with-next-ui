import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="py-6">
            <nav className="container bg-slate-400 p-4 mx-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold">tekSkill</h1>
              <ul className="flex items-center gap-6">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/users">Table</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
        </Providers>
        {children}
      </body>
    </html>
  );
}
