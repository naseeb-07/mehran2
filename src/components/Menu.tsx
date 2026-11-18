"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { menuItems, categories, MenuItemData } from "../data/menuData";
import { generateMenuPdf } from "../utils/generateMenuPdf";
import DishModal from "./DishModal";

interface MenuSectionProps {
  onOpenDishModal?: (dishId: string) => void;
}

export default function MenuSection({ onOpenDishModal }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDiet, setActiveDiet] = useState<"all" | "veg" | "nonveg" | "special">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItemData | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;

      let matchDiet = true;
      if (activeDiet === "veg") matchDiet = item.diet === "veg";
      if (activeDiet === "nonveg") matchDiet = item.diet === "nonveg";
      if (activeDiet === "special") matchDiet = item.special === true;

      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.ingredients.toLowerCase().includes(q);

      return matchCat && matchDiet && matchSearch;
    });
  }, [activeCategory, activeDiet, searchQuery]);

  // Handle PDF Download
  const handleDownloadMenu = () => {
    setIsDownloading(true);
    try {
      generateMenuPdf();
    } catch (err) {
      console.error("Error generating PDF menu:", err);
    } finally {
      setTimeout(() => setIsDownloading(false), 1200);
    }
  };

  const handleReset = () => {
    setActiveCategory("all");
    setActiveDiet("all");
    setSearchQuery("");
  };

  const handleCardClick = (dish: MenuItemData) => {
    if (onOpenDishModal) {
      onOpenDishModal(dish.id);
    } else {
      setSelectedDish(dish);
    }
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-mehran-deep via-[#072a20] to-mehran-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold tracking-widest text-mehran-gold-light bg-mehran-gold/10 border border-mehran-border px-4 py-1.5 rounded-full uppercase mb-3">
            Royal Multi-Cuisine Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Explore Our Delicious Offerings
          </h2>
          <div className="w-16 h-1 bg-gold-gradient rounded-full mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-mehran-muted leading-relaxed">
            Priced affordably between ₹200 – ₹400 for a lavish Arabian dining feast. Filter by category, search your favorites, or download our printable menu booklet!
          </p>
        </div>

        {/* Top Action Bar: Search, Dietary Filters & DOWNLOAD MENU BUTTON */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">

          {/* Search Input */}
          <div className="relative flex-1 min-w-[260px]">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-mehran-gold text-sm"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Mandi, Alfaham, Shawarma, Kunafa, Drinks..."
              className="w-full bg-mehran-surface border border-mehran-border rounded-full py-3 pl-11 pr-10 text-sm text-white placeholder:text-mehran-muted focus:outline-none focus:border-mehran-gold focus:ring-1 focus:ring-mehran-gold transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm"
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          {/* Right Group: Dietary Pills & DOWNLOAD MENU BUTTON */}
          <div className="flex items-center gap-3 flex-wrap justify-between sm:justify-start">

            {/* Dietary Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-mehran-surface border border-mehran-border rounded-full text-xs">
              <button
                onClick={() => setActiveDiet("all")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                  activeDiet === "all" ? "bg-gold-gradient text-black font-bold shadow-sm" : "text-gray-300 hover:text-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveDiet("nonveg")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                  activeDiet === "nonveg"
                    ? "bg-red-600/30 text-red-400 border border-red-500/50"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500"></span> Non-Veg
              </button>
              <button
                onClick={() => setActiveDiet("veg")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                  activeDiet === "veg"
                    ? "bg-emerald-600/30 text-emerald-400 border border-emerald-500/50"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Veg
              </button>
              <button
                onClick={() => setActiveDiet("special")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 ${
                  activeDiet === "special"
                    ? "bg-mehran-gold/20 text-mehran-gold-light border border-mehran-gold/40"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-crown text-mehran-gold text-[10px]"></i> Special
              </button>
            </div>

            {/* DOWNLOAD MENU BUTTON (PROMINENT USER REQUIREMENT) */}
            <button
              onClick={handleDownloadMenu}
              disabled={isDownloading}
              className="px-4 py-2.5 rounded-full bg-gold-gradient text-black text-xs sm:text-sm font-bold shadow-gold-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-mehran-gold-light whitespace-nowrap cursor-pointer"
              title="Download full royal menu card in PDF format"
            >
              {isDownloading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin text-sm"></i>
                  <span>Downloading PDF...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-file-pdf text-sm text-red-700"></i>
                  <span>Download Menu (PDF)</span>
                </>
              )}
            </button>

          </div>

        </div>

        {/* Category Horizontal Scroll Tabs */}
        <div className="overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-mehran-gold scrollbar-track-transparent">
          <div className="flex items-center gap-2.5 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-gold-gradient text-black shadow-gold-sm font-bold"
                    : "bg-mehran-surface border border-white/10 text-gray-300 hover:border-mehran-gold/50 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-mehran-surface border border-dashed border-mehran-border rounded-2xl">
            <i className="fa-regular fa-face-meh text-4xl text-mehran-gold mb-3"></i>
            <h3 className="font-serif text-xl font-bold text-white mb-2">No dishes found</h3>
            <p className="text-sm text-mehran-muted max-w-sm mx-auto mb-4">
              Try searching for &ldquo;Mandi&rdquo;, &ldquo;Alfaham&rdquo;, &ldquo;Shawarma&rdquo;, or &ldquo;Kunafa&rdquo;.
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-full text-xs font-bold bg-gold-gradient text-black hover:brightness-105 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => {
              const isVeg = dish.diet === "veg";
              const waText = encodeURIComponent(
                `Hello Mehran Restaurant, I would like to order: ${dish.name} (${dish.price}).`
              );
              const waUrl = `https://wa.me/917349746455?text=${waText}`;

              return (
                <article
                  key={dish.id}
                  className="bg-mehran-surface border border-mehran-border/50 rounded-2xl overflow-hidden shadow-card-dark hover:border-mehran-gold hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                >
                  {/* Card Thumbnail */}
                  <div
                    className="relative h-44 overflow-hidden cursor-pointer bg-mehran-deep"
                    onClick={() => handleCardClick(dish)}
                    title="Click to view ingredients & details"
                  >
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dietary Indicator */}
                    <div className="absolute top-2.5 left-2.5 w-5 h-5 bg-white rounded flex items-center justify-center shadow-md">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          isVeg ? "bg-emerald-600" : "bg-red-600"
                        }`}
                      ></span>
                    </div>

                    {/* Special Badge */}
                    {dish.special && (
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-gold-gradient text-black shadow-sm flex items-center gap-1">
                        <i className="fa-solid fa-crown text-[8px]"></i>
                        <span>Chef&apos;s Choice</span>
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3
                        onClick={() => handleCardClick(dish)}
                        className="font-serif text-base font-bold text-white group-hover:text-mehran-gold-light transition-colors leading-snug cursor-pointer"
                      >
                        {dish.name}
                      </h3>
                      <span className="font-serif text-base font-extrabold text-mehran-gold-light whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-xs text-mehran-muted leading-relaxed mb-4 flex-grow line-clamp-2 font-light">
                      {dish.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
                      <span className="text-[11px] text-gray-300 px-2 py-0.5 rounded bg-white/5 truncate max-w-[170px]">
                        <i className="fa-solid fa-layer-group text-[10px] text-mehran-gold mr-1"></i>
                        {dish.portion}
                      </span>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black font-semibold text-xs transition-all flex items-center gap-1.5"
                      >
                        <i className="fa-brands fa-whatsapp text-xs"></i> Order
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Delivery / Swiggy Callout Banner */}
        <div className="mt-12 bg-radial-card border border-mehran-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card-dark">
          <div>
            <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 mb-1">
              <i className="fa-solid fa-motorcycle text-mehran-gold"></i> Craving Mehran at Home in Moodbidri?
            </h4>
            <p className="text-xs sm:text-sm text-mehran-muted">
              Order seamlessly on Swiggy or message our counter for instant parcel pickup!
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://www.swiggy.com/city/mangaluru/mehran-restaurant-adarsh-enclave-moodbidri-rest884773"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 text-xs font-bold text-center transition-colors"
            >
              Order on Swiggy
            </a>
            <a
              href="https://wa.me/917349746455?text=Hello%20Mehran%20Restaurant,%20I%20want%20to%20place%20a%20takeaway%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-gold-gradient text-black text-xs font-bold text-center shadow-gold-sm hover:scale-105 transition-transform"
            >
              <i className="fa-brands fa-whatsapp mr-1.5"></i> WhatsApp Takeaway
            </a>
          </div>
        </div>

      </div>

      {/* Dish Details Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </section>
  );
}
