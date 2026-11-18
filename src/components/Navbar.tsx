"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X, Phone, Utensils, Clock, MapPin } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["home", "about", "signature", "menu", "gallery", "story", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Signatures", href: "#signature", id: "signature" },
    { label: "Digital Menu", href: "#menu", id: "menu" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Our Story", href: "#story", id: "story" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Banner with Timings & Quick Contact */}
      <div className="bg-mehran-dark text-mehran-goldLight text-xs py-2 px-4 border-b border-mehran-emerald hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-mehran-gold" />
              <span>{restaurantInfo.contact.timings}</span>
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-mehran-gold" />
              <span>Private Majlis & Celebration Party Hall Available</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${restaurantInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-mehran-gold" />
              <span>Call: {restaurantInfo.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-mehran-emerald/95 backdrop-blur-md shadow-elevated py-3 border-b border-mehran-gold/20"
            : "bg-mehran-emerald py-4 border-b border-mehran-forest"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link href="#home" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-mehran-gold/60 bg-mehran-dark p-1 shadow-md group-hover:border-mehran-gold transition-colors">
                <Image
                  src="/logo/mehran-logo.png"
                  alt="Mehran Restaurant Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white uppercase group-hover:text-mehran-goldLight transition-colors">
                  MEHRAN
                </span>
                <span className="text-[10px] tracking-[0.25em] text-mehran-gold uppercase font-medium">
                  RESTAURANT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
                      isActive
                        ? "text-mehran-goldLight font-semibold"
                        : "text-neutral-200 hover:text-mehran-goldLight"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-mehran-gold to-mehran-goldLight rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="#menu"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-mehran-gold to-mehran-ochre text-mehran-dark font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-md hover:brightness-105 active:scale-95 transition-all"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="#menu"
                className="bg-mehran-gold text-mehran-dark text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                Menu
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 rounded-lg hover:bg-mehran-forest focus:outline-none focus:ring-2 focus:ring-mehran-gold"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-mehran-dark/95 backdrop-blur-lg border-b border-mehran-gold/20 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-mehran-forest text-mehran-gold"
                      : "text-neutral-200 hover:bg-mehran-forest/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-mehran-forest flex flex-col gap-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-mehran-gold" />
                <span>{restaurantInfo.contact.timings}</span>
              </div>
              <a
                href={`tel:${restaurantInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 bg-mehran-forest text-mehran-goldLight py-2.5 rounded-lg font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call {restaurantInfo.contact.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

