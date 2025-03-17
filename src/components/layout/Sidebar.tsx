"use client"; // Karena ini komponen interaktif
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="fixed z-50 left-4 top-1/3 hidden lg:flex flex-col space-y-4 bg-white p-3 rounded-lg shadow-lg border border-[#14b8a6]">
      <Link href="https://github.com/yourusername" target="_blank">
        <FaGithub className="text-[#14b8a6] text-2xl hover:text-gray-400 cursor-pointer" />
      </Link>
      <Link href="https://linkedin.com/in/yourusername" target="_blank">
        <FaLinkedin className="text-[#14b8a6] text-2xl hover:text-blue-400 cursor-pointer" />
      </Link>
      <Link href="https://twitter.com/yourusername" target="_blank">
        <FaTwitter className="text-[#14b8a6] text-2xl hover:text-blue-300 cursor-pointer" />
      </Link>
    </div>
  );
}
