import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Steam Remake",
  description: "Remaking Steam Using Figma Design from", //will add name of the person here.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
      </body>
    </html>
  );
}
