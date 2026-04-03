"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            CG
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900 leading-tight">Cedar Group</span>
            <span className="text-xs text-blue-600 font-semibold tracking-wider uppercase">Hospital</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-blue-600">
            <PhoneCall className="w-5 h-5" />
            <span className="font-semibold">07045669178</span>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contact#appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-800 py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-blue-600 py-2">
            <PhoneCall className="w-5 h-5" />
            <span className="font-semibold">07045669178</span>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2">
            <Link href="/contact#appointment" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
