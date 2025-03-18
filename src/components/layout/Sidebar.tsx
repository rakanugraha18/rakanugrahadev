"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="fixed z-50 left-4 top-1/3 hidden lg:flex flex-col space-y-4 bg-white p-3 rounded-lg shadow-lg border border-[#14b8a6]">
      <Link href="https://github.com/rakanugraha18" target="_blank">
        <FaGithub className="text-[#14b8a6] text-2xl hover:text-[#00423b] cursor-pointer" />
      </Link>
      <Link href="https://linkedin.com/in/rakanugraha" target="_blank">
        <FaLinkedin className="text-[#14b8a6] text-2xl hover:text-[#00423b] cursor-pointer" />
      </Link>
      <Link href="https://instagram.com/rakajnugraha" target="_blank">
        <FaInstagram className="text-[#14b8a6] text-2xl hover:text-[#00423b] cursor-pointer" />
      </Link>
    </div>
  );
}
