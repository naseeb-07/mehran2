"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Flame } from "lucide-react";

export default function SignatureDishes() {
  const signatures = [
    {
      title: "Mutton Raan Mandi",
      category: "Crown Jewel of Mandi",
      description: "A whole mutton leg, marinated and cooked to royal perfection, served over fragrant mandi rice - a grand and flavorful centerpiece.",
      image: "/images/food/mandi-mutton-raan-ribs.png",
      price: "From ₹1800",
      portions: "Ustaadi • Barbecue • Zafrani",
      badge: "Grand Centerpiece",
      menuId: "mutton-raan-mandi",
    },
    {
      title: "Chicken Kabuli Zafrani Mandi",
      category: "Signature Mandi Delicacies",
      description: "Tender chicken cooked in zafrani (saffron-infused) spices, served over rich Kabuli rice with nuts and raisins a royal twist on classic Mandi.",
      image: "/images/food/mandi-chicken-kabuli-zafrani.png",
      price: "Qtr ₹250 • Half ₹470 • Full ₹900",
      portions: "Quarter • Half • 3/4 • Full",
      badge: "Customer Favorite",
      menuId: "chicken-kabuli-zafrani-mandi",
    },
    {
      title: "Juicy Lucy Alfaham & Starters",
      category: "Charcoal BBQ Grills",
      description: "Extra-juicy Arabic-style grilled chicken, marinated in a rich, masala spice blend for maximum tenderness and charcoal aroma.",
      image: "/images/food/alfaham-starters.png",
      price: "From ₹140",
      portions: "Served with Garlic Dip, Fries & Pickled Onions",
      badge: "Charcoal Sizzler",
      menuId: "bbq-starters",
    },
    {
      title: "The Royal Skewers & Seekh",
      category: "Special Gourmet",
      description: "Tender chicken Shish Tawook and Cheesy Malai Tikka skewers marinated in royal spices and charcoal-grilled to juicy perfection.",
      image: "/images/food/royal-skewers.png",
      price: "Half (5pc) ₹230 • Full (10pc) ₹420",
      portions: "5 PC / 10 PC Skewers",
      badge: "Imperial Skewer",
      menuId: "the-royal-skewer",
    },
    {
      title: "Classic Shawaya Royale",
      category: "Rotisserie Royale",
      description: "Traditional rotisserie chicken marinated in aromatic spices and slow-roasted till juicy, succulent, and delicately smoky.",
      image: "/images/food/shawaya-royale.png",
      price: "Qtr ₹140 • Half ₹260 • Full ₹500",
      portions: "Quarter • Half • 3/4 • Full",
      badge: "Slow-Roasted",
      menuId: "shawaya-royale",
    },
    {
      title: "Shaadi Ki & Mutton Biriyani",
      category: "Biriyani Delicacies",
      description: "Aromatic basmati rice layered with tender meat, slow-cooked in traditional dum pots with spices for that rich, festive biriyani experience.",
      image: "/images/food/biriyani-delicacies.png",
      price: "Half ₹120 • Full ₹220",
      portions: "Dum Basmati Rice • Boiled Egg",
      badge: "Royal Dum Feast",
      menuId: "biriyani-delicacies",
    },
  ];

  return (
    <section id="signature" className="py-24 bg-mehran-dark text-white relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-arabian-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-mehran-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mehran-emerald/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-mehran-gold text-xs uppercase tracking-[0.25em] font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Culinary Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Signature Specialities
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Hand-picked masterpieces from our kitchen, representing the highest artistry of Arabian mandi slow-cooking and charcoal-flamed grilling.
            </p>
          </div>

          <Link
            href="#menu"
            className="inline-flex items-center gap-2 text-mehran-gold hover:text-mehran-goldLight text-sm font-semibold tracking-wide group"
          >
            <span>View Full 47-Category Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Editorial Layout: First 2 are large feature cards, remaining 4 are balanced cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {signatures.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="bg-mehran-emerald/60 border border-mehran-gold/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md hover:border-mehran-gold transition-all duration-300 flex flex-col md:flex-row gap-6 items-center group shadow-elevated"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-2xl overflow-hidden border-2 border-mehran-gold/40 shadow-inner bg-mehran-dark/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-mehran-gold text-mehran-dark text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  {item.badge}
                </span>
              </div>
              <div className="flex flex-col justify-between space-y-3 flex-1 text-left">
                <div>
                  <span className="text-xs uppercase tracking-wider text-mehran-gold font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-mehran-goldLight transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2 font-light">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-mehran-forest flex items-center justify-between">
                  <span className="text-xs font-semibold text-mehran-goldLight">
                    {item.price}
                  </span>
                  <Link
                    href={`#menu`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-200 group-hover:text-mehran-gold transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatures.slice(2).map((item, idx) => (
            <div
              key={idx}
              className="bg-mehran-forest/50 border border-mehran-emerald rounded-2xl p-5 hover:border-mehran-gold/60 transition-all duration-300 flex flex-col justify-between group shadow-subtle"
            >
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border border-mehran-gold/30 bg-mehran-dark">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-mehran-dark/85 text-mehran-gold text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-mehran-gold/30">
                    {item.badge}
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-mehran-gold font-medium block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-2 group-hover:text-mehran-goldLight transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-mehran-emerald/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-mehran-goldLight">
                  {item.price}
                </span>
                <Link
                  href="#menu"
                  className="text-xs text-neutral-300 hover:text-mehran-gold transition-colors"
                >
                  View &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

