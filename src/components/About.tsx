"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, Flame, HeartHandshake, CheckCircle2 } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

export default function About() {
  return (
    <section id="about" className="py-24 bg-mehran-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background decorative gold box */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-mehran-emerald to-mehran-forest opacity-15 rotate-2" />

              {/* Main Card with Logo & Imagery */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-mehran-border bg-white p-6 shadow-elevated">
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-mehran-dark">
                  <Image
                    src="/images/food/mandi-chicken-kabuli-zafrani.png"
                    alt="Royal Dining Atmosphere"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mehran-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-mehran-gold">
                      DINING EXPERIENCE
                    </span>
                    <h4 className="font-serif text-lg font-bold">
                      Royal Arabian Hospitality
                    </h4>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-mehran-cream border border-mehran-border/80">
                    <div className="w-10 h-10 rounded-lg bg-mehran-emerald text-mehran-gold flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-mehran-dark">Private Family Majlis</h5>
                      <p className="text-xs text-neutral-600">Traditional low-floor seating cabins offering complete privacy for families.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-xl bg-mehran-cream border border-mehran-border/80">
                    <div className="w-10 h-10 rounded-lg bg-mehran-emerald text-mehran-gold flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-mehran-dark">Celebration Party Hall</h5>
                      <p className="text-xs text-neutral-600">Air-conditioned event space for birthdays, banquets, and get-togethers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-mehran-emerald text-xs uppercase tracking-[0.25em] font-bold">
              <span className="w-8 h-[1px] bg-mehran-gold" />
              <span>About Mehran Restaurant</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-mehran-dark leading-tight">
              {restaurantInfo.about.storyHeading}
            </h2>

            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>{restaurantInfo.about.p1}</p>
              <p>{restaurantInfo.about.p2}</p>
              <p>{restaurantInfo.about.p3}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-mehran-dark">
                <CheckCircle2 className="w-4 h-4 text-mehran-gold shrink-0" />
                <span>Separate Private Majlis Cabins</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-mehran-dark">
                <CheckCircle2 className="w-4 h-4 text-mehran-gold shrink-0" />
                <span>Dedicated Celebration Party Hall</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-mehran-dark">
                <CheckCircle2 className="w-4 h-4 text-mehran-gold shrink-0" />
                <span>Charcoal Alfaham & Live Tandoor</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-mehran-dark">
                <CheckCircle2 className="w-4 h-4 text-mehran-gold shrink-0" />
                <span>100% Halal Fresh Ingredients</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="#story"
                className="inline-flex items-center gap-2 bg-mehran-emerald text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:bg-mehran-forest transition-colors shadow-subtle"
              >
                <span>Read Full Restaurant Story</span>
                <span>&rarr;</span>
              </Link>
              <Link
                href="#contact"
                className="text-xs sm:text-sm font-semibold text-mehran-emerald hover:text-mehran-goldDark underline underline-offset-4"
              >
                Contact & Book Majlis
              </Link>
            </div>
          </div>

        </div>

        {/* Facilities 4-Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurantInfo.facilities.map((fac, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-mehran-border/80 shadow-subtle flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center mb-4">
                  {fac.icon === "Users" && <Users className="w-5 h-5" />}
                  {fac.icon === "Sparkles" && <Sparkles className="w-5 h-5" />}
                  {fac.icon === "Flame" && <Flame className="w-5 h-5" />}
                  {fac.icon === "HeartHandshake" && <HeartHandshake className="w-5 h-5" />}
                </div>
                <h3 className="font-serif font-bold text-base text-mehran-dark mb-1.5">
                  {fac.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

