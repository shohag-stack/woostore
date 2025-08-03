import type { Metadata } from "next";
import Navigation from "../components/ui/Navigation"
import "./globals.css";
import "../style/style.css"
import {CartProvider} from "../Context/CartContext"
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "WooStore",
  description: "Get your desire Products",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const res = await fetch(`${process.env.NEXT_PUBLIC_WP_NAV_MENU_ITEMS}/primary`, {
    next: {
      revalidate: 60 * 60,
    },
  });

  const data = await res.json();

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
