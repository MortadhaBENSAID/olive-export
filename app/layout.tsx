import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Tunisian Olive Oil Exporter | Bulk & Private Label Supplier",
  description:
    "Direct producer of extra virgin olive oil from Tunisia. Bulk export (IBC, drums, flexitank) and private label supply for wholesalers and international brands.",
  keywords: [
    "olive oil supplier Tunisia",
    "bulk olive oil exporter",
    "private label olive oil",
    "wholesale olive oil Europe",
    "extra virgin olive oil bulk"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>

        {/* HEADER GLOBAL */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 60px",
        borderBottom: "1px solid #eee",
        background: "white"
      }}>
        
        <div style={{ fontWeight: "bold", fontSize: "18px", color: "#4c9107" }}>
          Tunisian Olive Export
        </div>

        <nav style={{ display: "flex", gap: "18px" }}>

          <a href="/" style={{ textDecoration: "none", color: "#1f1f1f" }}>Home</a>
          <a href="/story" style={{ textDecoration: "none", color: "#1f1f1f" }}>Our story</a>
          <a href="/about" style={{ textDecoration: "none", color: "#1f1f1f" }}>About Factory</a>
          <a href="/bulk-export" style={{ textDecoration: "none", color: "#1f1f1f" }}>Bulk Export</a>
          <a href="/private-label" style={{ textDecoration: "none", color: "#1f1f1f" }}>Private Label</a>
          <a href="/certifications" style={{ textDecoration: "none", color: "#1f1f1f" }}>Certifications</a>
          <a href="/contact" style={{ textDecoration: "none", color: "#556B2F" }}>Contact</a>

        </nav>

      </header>

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}
