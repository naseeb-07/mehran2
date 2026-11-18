"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { Sparkles, X, ZoomIn, Eye } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Showcase" },
    { id: "mandi", label: "Mandi Platters" },
    { id: "bbq", label: "Charcoal & BBQ" },
    { id: "starters", label: "Starters & Mezze" },
    { id: "biryani", label: "Dum Biryani" },
    { id: "specials", label: "Chef Specialties" },
  ];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-mehran-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-mehran-emerald text-xs uppercase tracking-[0.25em] font-bold">
            <Sparkles className="w-4 h-4 text-mehran-gold" />
            <span>Visual Showcase</span>
            <Sparkles className="w-4 h-4 text-mehran-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-mehran-dark">
            Restaurant Gallery
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Feast your eyes on the rich visual banquet of Mehran Restaurant — from slow-roasted royal Mutton Raan and steaming Zafrani Mandi to sizzling charcoal Alfaham.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-full font-medium transition-all ${
                  isActive
                    ? "bg-mehran-emerald text-white shadow-md border border-mehran-gold/40"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-mehran-border"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-mehran-border shadow-subtle hover:shadow-elevated hover:border-mehran-gold/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-mehran-dark">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-mehran-dark flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {item.tag && (
                  <span className="absolute top-2.5 left-2.5 bg-mehran-dark/85 text-mehran-gold text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-mehran-gold/30">
                    {item.tag}
                  </span>
                )}
              </div>

              <div className="p-4 space-y-1">
                <h4 className="font-serif font-bold text-base text-mehran-dark group-hover:text-mehran-emerald transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-mehran-dark border border-mehran-gold/30 rounded-3xl overflow-hidden p-6 text-white shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-white hover:text-mehran-gold p-2 rounded-full bg-black/40 border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 border border-mehran-emerald">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2">
                {activeItem.tag && (
                  <span className="bg-mehran-gold text-mehran-dark text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {activeItem.tag}
                  </span>
                )}
                <span className="text-xs text-neutral-400 capitalize">
                  {activeItem.category}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

