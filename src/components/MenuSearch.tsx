"use client";

import React from "react";
import { Search, X, Flame, Leaf, Sparkles, Filter } from "lucide-react";

interface MenuSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: "all" | "veg" | "nonveg" | "signature" | "spicy";
  onFilterChange: (filter: "all" | "veg" | "nonveg" | "signature" | "spicy") => void;
  totalResults?: number;
}

export default function MenuSearch({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  totalResults,
}: MenuSearchProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-mehran-border shadow-subtle space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by dish name, category, or ingredients (e.g. Mandi, Alfaham, Raan, Kulcha, Biriyani)..."
          className="w-full pl-12 pr-10 py-3.5 bg-mehran-cream/70 border border-mehran-border rounded-xl text-sm sm:text-base text-mehran-dark placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-mehran-gold focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Chips Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>

          <button
            onClick={() => onFilterChange("all")}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              activeFilter === "all"
                ? "bg-mehran-emerald text-white shadow-sm"
                : "bg-mehran-cream text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            All Items
          </button>

          <button
            onClick={() => onFilterChange("veg")}
            className={`inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              activeFilter === "veg"
                ? "bg-emerald-700 text-white shadow-sm"
                : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
            }`}
          >
            <Leaf className="w-3 h-3" />
            <span>Vegetarian</span>
          </button>

          <button
            onClick={() => onFilterChange("nonveg")}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              activeFilter === "nonveg"
                ? "bg-mehran-maroon text-white shadow-sm"
                : "bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200"
            }`}
          >
            Non-Veg Only
          </button>

          <button
            onClick={() => onFilterChange("signature")}
            className={`inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              activeFilter === "signature"
                ? "bg-mehran-gold text-mehran-dark font-bold shadow-sm"
                : "bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200"
            }`}
          >
            <Sparkles className="w-3 h-3 text-mehran-goldDark" />
            <span>Signatures</span>
          </button>

          <button
            onClick={() => onFilterChange("spicy")}
            className={`inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              activeFilter === "spicy"
                ? "bg-red-600 text-white shadow-sm"
                : "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
            }`}
          >
            <Flame className="w-3 h-3" />
            <span>Spicy Delights</span>
          </button>
        </div>

        {/* Live Count */}
        {totalResults !== undefined && (
          <div className="text-xs text-neutral-500 font-medium">
            Showing <strong className="text-mehran-dark">{totalResults}</strong> dishes
          </div>
        )}
      </div>
    </div>
  );
}

