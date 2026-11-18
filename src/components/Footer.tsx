"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { restaurantInfo } from "@/data/restaurant";
import {
  Phone,
  Clock,
  MapPin,
  Heart,
  Instagram,
  Facebook,
  MessageSquare,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-mehran-dark text-white border-t border-mehran-gold/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-arabian-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-mehran-forest">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-mehran-gold bg-mehran-dark p-1 shadow-md">
                <Image
                  src="/logo/mehran-logo.png"
                  alt="Mehran Restaurant"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-white uppercase group-hover:text-mehran-goldLight transition-colors">
                  MEHRAN
                </span>
                <span className="text-[10px] tracking-[0.25em] text-mehran-gold uppercase font-medium">
                  RESTAURANT
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Premium Arabian & Indian fine dining specializing in royal Mandi delicacies, charcoal-grilled Alfaham, Mutton Raan, and comforting family feasts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={restaurantInfo.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-mehran-forest flex items-center justify-center text-mehran-gold hover:bg-mehran-gold hover:text-mehran-dark transition-colors border border-mehran-gold/30"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-mehran-forest flex items-center justify-center text-mehran-gold hover:bg-mehran-gold hover:text-mehran-dark transition-colors border border-mehran-gold/30"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-mehran-forest flex items-center justify-center text-mehran-gold hover:bg-mehran-gold hover:text-mehran-dark transition-colors border border-mehran-gold/30"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-mehran-goldLight uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <Link href="#home" className="hover:text-mehran-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-mehran-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#signature" className="hover:text-mehran-gold transition-colors">
                  Signatures
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-mehran-gold transition-colors">
                  Digital Menu
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-mehran-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-mehran-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-mehran-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Highlights (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-mehran-goldLight uppercase tracking-wider">
              Signature Feasts
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <Link href="#menu" className="hover:text-mehran-gold transition-colors">
                  Chicken Kabuli Zafrani Mandi
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-mehran-gold transition-colors">
                  Whole Mutton Raan Mandi
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-mehran-gold transition-colors">
                  Charcoal Juicy Lucy Alfaham
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-mehran-gold transition-colors">
                  Classic Shawaya Royale
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-mehran-gold transition-colors">
                  Shaadi Ki Dum Biriyani
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-mehran-gold transition-colors">
                  Afghani Mutton Haleem & Paya
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-mehran-goldLight uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-mehran-gold shrink-0 mt-0.5" />
                <span>{restaurantInfo.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-mehran-gold shrink-0" />
                <a
                  href={`tel:${restaurantInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-mehran-gold transition-colors"
                >
                  {restaurantInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-mehran-gold shrink-0 mt-0.5" />
                <span>{restaurantInfo.contact.timings}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Mehran Restaurant. All rights reserved. Strictly authentic recipes.
          </p>
          <div className="flex items-center gap-4">
            <span>Crafted with pride and passion</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-mehran-forest flex items-center justify-center text-mehran-gold hover:bg-mehran-gold hover:text-mehran-dark transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

