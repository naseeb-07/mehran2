"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, UtensilsCrossed, Users, Award, Sparkles, ChefHat } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

export default function Introduction() {
  return (
    <section id="about-intro" className="py-20 bg-mehran-cream relative overflow-hidden">
      {/* Background subtle radial pattern */}
      <div className="absolute inset-0 bg-cream-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-mehran-emerald text-xs uppercase tracking-[0.25em] font-bold">
            <span className="w-8 h-[1px] bg-mehran-gold" />
            <span>Welcome To Mehran</span>
            <span className="w-8 h-[1px] bg-mehran-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-mehran-dark">
            Royal Flavors of Arabia & Traditional India
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Mehran Restaurant was conceived with a passionate commitment to authentic recipes, exceptional slow-cooked techniques, and warm Middle Eastern hospitality.
          </p>
        </div>

        {/* Core Pillars 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Mandi Delicacies */}
          <div className="bg-white rounded-2xl p-6 border border-mehran-border shadow-subtle hover:shadow-elevated transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center mb-4 group-hover:bg-mehran-emerald group-hover:text-mehran-gold transition-colors">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-mehran-dark mb-2">
                Mandi Delicacies
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Authentic Arabian slow-simmered chicken and mutton served over saffron-infused Kabuli rice with caramelized raisins and crisp nuts.
              </p>
            </div>
            <Link
              href="#menu"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-mehran-emerald group-hover:text-mehran-goldDark"
            >
              <span>Explore 20+ Mandi Styles</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Card 2: Charcoal Grills & Alfaham */}
          <div className="bg-white rounded-2xl p-6 border border-mehran-border shadow-subtle hover:shadow-elevated transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center mb-4 group-hover:bg-mehran-emerald group-hover:text-mehran-gold transition-colors">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-mehran-dark mb-2">
                Charcoal & BBQ Grills
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Sizzling Alfaham, juicy Shish Tawook skewers, spicy Tawa Wings, and melt-in-the-mouth Seekh Kababs flamed over natural charcoal.
              </p>
            </div>
            <Link
              href="#menu"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-mehran-emerald group-hover:text-mehran-goldDark"
            >
              <span>View Grill Selection</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Card 3: Indian & Chinese Wok */}
          <div className="bg-white rounded-2xl p-6 border border-mehran-border shadow-subtle hover:shadow-elevated transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center mb-4 group-hover:bg-mehran-emerald group-hover:text-mehran-gold transition-colors">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-mehran-dark mb-2">
                Indian & Chinese Delights
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Rich North Indian Kadai & Mughlai gravies, coastal Ghee Roasts, freshly baked tandoori naans, and fiery Indo-Chinese wok noodles.
              </p>
            </div>
            <Link
              href="#menu"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-mehran-emerald group-hover:text-mehran-goldDark"
            >
              <span>Explore Curries & Breads</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Card 4: Majlis & Party Dining */}
          <div className="bg-white rounded-2xl p-6 border border-mehran-border shadow-subtle hover:shadow-elevated transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center mb-4 group-hover:bg-mehran-emerald group-hover:text-mehran-gold transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-mehran-dark mb-2">
                Private Majlis & Hall
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Experience authentic Arabian floor dining in private family majlis cabins or host milestone celebrations in our dedicated party hall.
              </p>
            </div>
            <Link
              href="#about"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-mehran-emerald group-hover:text-mehran-goldDark"
            >
              <span>Discover Dining Spaces</span>
              <span>&rarr;</span>
            </Link>
          </div>

        </div>

        {/* Restaurant Stats Counter Bar */}
        <div className="bg-mehran-emerald rounded-2xl p-8 border border-mehran-gold/30 shadow-elevated">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-mehran-forest/60">
            {restaurantInfo.stats.map((stat, i) => (
              <div key={i} className="pt-4 md:pt-0 first:pt-0">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-mehran-goldLight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

