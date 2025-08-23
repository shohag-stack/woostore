import type { Metadata } from "next";
import Navigation from "../components/ui/Navigation"
import "./globals.css";
import "../style/style.css"
import {CartProvider} from "../Context/CartContext"
import Footer from "@/components/ui/Footer";
import data from "../lib/data/menu.json"

export const metadata: Metadata = {
  title: "WooStore",
  description: "Get your desire Products",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <CartProvider>
    <html lang="en">
      <body>
        <Navigation menuItems={data}/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
    </CartProvider>
  );
}
