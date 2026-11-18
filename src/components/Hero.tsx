"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Phone, Sparkles, ArrowRight, Award, ShieldCheck } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

export default function Hero() {
  return (
    <section id="home" className="relative bg-mehran-emerald text-white overflow-hidden">
      {/* Subtle luxury damask background pattern */}
      <div className="absolute inset-0 bg-arabian-pattern opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-mehran-emerald/90 pointer-events-none" />

      {/* Decorative ambient gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mehran-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand, Story & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mehran-forest/80 border border-mehran-gold/30 text-mehran-goldLight text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4 text-mehran-gold animate-pulse" />
              <span>Authentic Arabian & Indian Dining Experience</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                MEHRAN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mehran-gold via-mehran-goldLight to-mehran-ochre">
                  RESTAURANT
                </span>
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-mehran-sand/90">
                &ldquo;{restaurantInfo.establishedStory}&rdquo;
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to Mehran Restaurant, home of grand <strong className="text-mehran-goldLight font-medium">Mandi Delicacies</strong>, charcoal-grilled <strong className="text-mehran-goldLight font-medium">Alfaham</strong>, succulent <strong className="text-mehran-goldLight font-medium">Mutton Raan</strong>, and aromatic Indian gravies. Savor royal flavors in traditional <strong className="text-mehran-goldLight font-medium">Majlis dining areas</strong> or celebrate in our exclusive party hall.
            </p>

            {/* Feature Highlights Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5 bg-mehran-dark/60 border border-mehran-forest px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-mehran-gold" />
                <span>100% Halal Preparations</span>
              </div>
              <div className="flex items-center gap-1.5 bg-mehran-dark/60 border border-mehran-forest px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-mehran-gold" />
                <span>Private Family Majlis</span>
              </div>
              <div className="flex items-center gap-1.5 bg-mehran-dark/60 border border-mehran-forest px-3 py-1.5 rounded-lg">
                <Sparkles className="w-4 h-4 text-mehran-gold" />
                <span>Celebration Party Hall</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-mehran-gold to-mehran-ochre text-mehran-dark px-7 py-3.5 rounded-full font-semibold text-sm shadow-gold-glow hover:brightness-105 active:scale-95 transition-all group"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Digital Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-mehran-forest/80 hover:bg-mehran-forest border border-mehran-gold/40 text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-mehran-gold" />
                <span>Table & Majlis Inquiry</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold ring */}
              <div className="absolute inset-0 rounded-full border border-mehran-gold/30 scale-105 animate-[spin_40s_linear_infinite] pointer-events-none" />

              {/* Main Circular Food Platter Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-mehran-gold/40 bg-mehran-dark/70 shadow-2xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner bg-mehran-emerald/40">
                  <Image
                    src="/images/food/mandi-mutton-raan-ribs.png"
                    alt="Signature Mutton Raan Mandi Feast"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mehran-dark/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Plate Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-left p-3 rounded-xl bg-mehran-dark/85 backdrop-blur-md border border-mehran-gold/30">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-mehran-gold">
                      CROWN JEWEL
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                      Mutton Raan Mandi
                    </h3>
                    <p className="text-xs text-neutral-300">
                      Slow-roasted whole leg served over aromatic zafrani rice.
                    </p>
                  </div>
                </div>

                {/* Secondary Floating Mini Card */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-mehran-forest border border-mehran-gold/50 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-mehran-gold relative bg-mehran-dark">
                    <Image
                      src="/images/food/alfaham-starters.png"
                      alt="Charcoal Alfaham Grill"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-mehran-gold font-bold block uppercase tracking-wider">
                      Charcoal Grill
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Alfaham Specials
                    </span>
                  </div>
                </div>

                {/* Secondary Floating Left Mini Card */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-mehran-forest border border-mehran-gold/50 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-mehran-gold relative bg-mehran-dark">
                    <Image
                      src="/images/food/biriyani-delicacies.png"
                      alt="Dum Biryani"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-mehran-gold font-bold block uppercase tracking-wider">
                      Dum Specialties
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Shaadi Ki Biriyani
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom border wave transition */}
      <div className="h-6 bg-gradient-to-b from-transparent to-mehran-cream border-b border-mehran-border/40" />
    </section>
  );
}

