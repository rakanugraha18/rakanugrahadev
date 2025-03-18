"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, House, SquareChartGantt, User, Send } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { name: "Home", path: "#home", icon: House },
  { name: "About", path: "#about", icon: User },
  { name: "Projects", path: "#projects", icon: SquareChartGantt },
  { name: "Contact", path: "#contact", icon: Send },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  // Handle Scroll ke Elemen Tertentu
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  // Menentukan activeTab berdasarkan scroll
  useEffect(() => {
    const sections = tabs.map((tab) => ({
      id: tab.path.substring(1), // Menghapus '#' dari path
      name: tab.name,
    }));

    const onScroll = () => {
      let currentTab = "Home"; // Default ke Home jika tidak ada yang terlihat
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentTab = section.name;
            break;
          }
        }
      }
      setActiveTab(currentTab);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#00423b] shadow-lg z-50">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl font-bold flex items-center space-x-3">
            <img
              src="/imgs/white-rk.png"
              alt="logo-rk"
              className="min-w-4 max-h-8"
            />
            <span className="text-white">Raka Nugraha</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          {tabs.slice(0, 3).map((tab) => (
            <Link key={tab.name} href={tab.path}>
              <div
                className={`px-7 py-2 cursor-pointer transition-all duration-300 flex items-center space-x-2
                  ${
                    activeTab === tab.name
                      ? "underline text-[#14b8a6] underline-offset-8 "
                      : "rounded-lg hover:underline hover:text-[#14b8a6] underline-offset-8"
                  }`}
                onClick={() => {
                  handleScroll(tab.path.substring(1));
                  setActiveTab(tab.name);
                }}
              >
                <tab.icon size={18} />
                <span>{tab.name} </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact di Ujung */}
        <div className="hidden lg:flex space-x-4">
          {tabs.slice(3, 4).map((tab) => (
            <Link key={tab.name} href={tab.path}>
              <div
                className={`px-7 py-2 cursor-pointer transition-all duration-300 flex items-center space-x-2
                  ${
                    activeTab === tab.name
                      ? "underline text-[#14b8a6] underline-offset-8 "
                      : "rounded-lg hover:underline hover:text-[#14b8a6] underline-offset-8"
                  }`}
                onClick={() => {
                  handleScroll(tab.path.substring(1));
                  setActiveTab(tab.name);
                }}
              >
                <tab.icon size={18} />
                <span>{tab.name} </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className={`lg:hidden mt-2 mb-1 ${isOpen ? "block" : "hidden"}`}
      >
        {tabs.map((tab) => (
          <Link key={tab.name} href={tab.path}>
            <div
              className={`font-inter bg-[#00423b] px-5 py-2 border-b flex items-center space-x-2 border-gray-700 last:border-none hover:bg-gray-800 ${
                activeTab === tab.name
                  ? "underline underline-offset-8 text-[#14b8a6] bg-[#00423b]"
                  : "hover:underline underline-offset-8"
              }`}
              onClick={() => {
                handleScroll(tab.path.substring(1));
                setActiveTab(tab.name);
                setIsOpen(false);
              }}
            >
              <tab.icon size={18} />
              <span>{tab.name}</span>
            </div>
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
