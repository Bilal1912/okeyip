import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/Components/Navbar";
import { Analytics } from '@vercel/analytics/next';
import Footer from "@/Components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OKEY IP ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main className="main-content pt-20" >
        {children}
        <Analytics />
        </main>
        <Footer/>
      </body>
    </html>
  );
}

