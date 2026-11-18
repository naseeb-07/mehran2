"use client";

import React from "react";
import Image from "next/image";
import { storyData } from "@/data/story";
import { restaurantInfo } from "@/data/restaurant";
import { Calendar, Award, Heart, CheckCircle2, Quote } from "lucide-react";

export default function RestaurantStory() {
  return (
    <section id="story" className="py-24 bg-mehran-emerald text-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-arabian-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-mehran-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-mehran-gold text-xs uppercase tracking-[0.25em] font-bold">
            <span className="w-8 h-[1px] bg-mehran-gold" />
            <span>Our Journey</span>
            <span className="w-8 h-[1px] bg-mehran-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {storyData.title}
          </h2>
          <p className="font-serif italic text-lg text-mehran-goldLight">
            &ldquo;{storyData.subtitle}&rdquo;
          </p>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            {storyData.introduction}
          </p>
        </div>

        {/* Timeline Visual Display */}
        <div className="relative border-l-2 border-mehran-gold/40 ml-4 sm:ml-8 md:mx-auto md:max-w-4xl space-y-12 pl-6 sm:pl-10">
          
          {storyData.timeline.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Gold Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-mehran-dark border-2 border-mehran-gold flex items-center justify-center shadow-gold-glow">
                <div className="w-2 h-2 rounded-full bg-mehran-gold animate-pulse" />
              </div>

              {/* Event Content Card */}
              <div className="bg-mehran-forest/60 border border-mehran-gold/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-elevated space-y-4 hover:border-mehran-gold transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-mehran-gold bg-mehran-dark/70 px-3 py-1 rounded-full border border-mehran-gold/30">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-mehran-goldLight transition-colors">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
                  {event.description}
                </p>

                {event.highlights && (
                  <div className="space-y-2 pt-2 border-t border-mehran-forest/80">
                    {event.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-mehran-gold shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>

        {/* Closing Inspirational Quote Banner */}
        <div className="bg-gradient-to-r from-mehran-dark via-mehran-forest to-mehran-dark rounded-3xl p-8 sm:p-10 border border-mehran-gold/40 shadow-elevated text-center max-w-4xl mx-auto space-y-4 relative">
          <Quote className="w-10 h-10 text-mehran-gold/30 mx-auto" />
          <p className="font-serif italic text-base sm:text-lg text-mehran-sand leading-relaxed max-w-2xl mx-auto">
            {storyData.closingQuote}
          </p>
          <div className="text-xs uppercase tracking-widest text-mehran-gold font-bold">
            — The Mehran Restaurant Family
          </div>
        </div>

        {/* Our Brands Showcase (from Page 20 of PDF) */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-mehran-gold font-bold">
              Our Culinary Family
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The Brands of Mehran
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
              Each distinct brand was created to celebrate a unique flavor tradition, crafted with passion and authentic recipes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {restaurantInfo.brands.map((brand, bIdx) => (
              <div
                key={bIdx}
                className="bg-mehran-dark/80 border border-mehran-gold/30 rounded-2xl p-4 text-center hover:border-mehran-gold transition-all duration-300 flex flex-col justify-between group shadow-subtle"
              >
                <div>
                  <div className="relative h-28 rounded-xl overflow-hidden mb-3 bg-mehran-emerald/30 border border-mehran-forest flex items-center justify-center p-2">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-serif font-bold text-base text-white group-hover:text-mehran-goldLight transition-colors">
                    {brand.name}
                  </h4>
                  <p className="font-serif italic text-[11px] text-mehran-gold mt-0.5">
                    &ldquo;{brand.tagline}&rdquo;
                  </p>
                </div>
                <p className="text-[11px] text-neutral-300 leading-normal mt-3 pt-2 border-t border-mehran-forest">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

