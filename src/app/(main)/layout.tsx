"use client";
import "../../app/globals.css"; // Import Tailwind
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/imgs/favicon-32x32.png" />
        <title>Raka Nugraha || Full Stack Developer</title>
      </head>
      <body className=" text-white font-mono">
        <Navbar />
        <Sidebar />
        <main>
          {loading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            children
          )}
        </main>
        <Footer />
      </body>
    </html>
  );
}
