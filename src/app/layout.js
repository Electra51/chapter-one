import Navbar from "@/component/Shared/Navbar";
import "./globals.css";
import Footer from "@/component/Shared/Footer";

export const metadata = {
  title: "Chapter One",
  description: "Design and developed by Safayet Nur using create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <div className="h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
