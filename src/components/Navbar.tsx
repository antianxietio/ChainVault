"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-accent">
          ChainVault
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-accent transition">Home</Link>
          <Link href="#how-it-works" className="hover:text-accent transition">How It Works</Link>
          <Link href="/dashboard" className="hover:text-accent transition">Dashboard</Link>
          <button className="bg-accent text-white px-4 py-2 rounded hover:opacity-80 transition">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block hover:text-accent">Home</Link>
          <Link href="#how-it-works" className="block hover:text-accent">How It Works</Link>
          <Link href="/dashboard" className="block hover:text-accent">Dashboard</Link>
          <button className="bg-accent w-full text-white px-4 py-2 rounded hover:opacity-80 transition">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
}
