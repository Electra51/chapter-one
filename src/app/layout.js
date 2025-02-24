import Navbar from "@/component/Shared/Navbar";
import "./globals.css";
import Footer from "@/component/Shared/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Chapter One",
  description: "Design and developed by Safayet Nur using create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
