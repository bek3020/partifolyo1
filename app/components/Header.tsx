"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaXmark } from "react-icons/fa6";

const links = ["home", "projects", "skills", "about-me", "contacts"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/5 sticky top-0 bg-[#2a2d31] z-50">
      <div className="max-w-[1024px] mx-auto px-4 py-4 flex justify-between items-center">
        <Image src="/img/logo_1.png" alt="logo" width={90} height={28} />

        <nav className="hidden md:flex gap-6 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="hover:text-[#b468e6] text-white"
            >
              #{l}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white z-50"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur flex flex-col justify-center items-center gap-8 font-mono text-xl transition
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setOpen(false)}
              className="hover:text-[#b468e6] text-white"
            >
              #{l}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
