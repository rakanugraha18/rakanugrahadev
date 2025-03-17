"use client";
import "../../app/globals.css"; // Import Tailwind
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";

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
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/Raka%2FLogo%2Ffavicon-32x32.png?alt=media&amp;token=2e94887b-9a5b-4b00-a8b3-62b62a952e5b"
        />
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
      </body>
    </html>
  );
}
