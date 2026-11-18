"use client";

import React from "react";
import Image from "next/image";
import { SubCategory } from "@/types";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  category: SubCategory;
  groupCode?: string;
}

export default function MenuCategory({ category, groupCode }: MenuCategoryProps) {
  return (
    <div id={`cat-${category.id}`} className="scroll-mt-32 space-y-6">
      
      {/* Category Header Banner with Original Menu Style */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-mehran-maroon via-mehran-terracotta to-mehran-maroon text-white p-5 sm:p-6 shadow-md border border-mehran-gold/30">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              {groupCode && (
                <span className="text-[10px] uppercase font-bold tracking-widest text-mehran-goldLight bg-black/30 px-2 py-0.5 rounded">
                  Group {groupCode}
                </span>
              )}
              <span className="text-xs text-mehran-goldLight/90 tracking-wider">
                {category.items.length} {category.items.length === 1 ? "Dish" : "Dishes"}
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white uppercase">
              {category.name}
            </h3>

            {category.description && (
              <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                {category.description}
              </p>
            )}

            {category.headerNote && (
              <div className="pt-1 text-xs text-mehran-goldLight font-medium">
                * {category.headerNote}
              </div>
            )}
          </div>

          {/* Optional Category Graphic if present */}
          {category.image && (
            <div className="hidden sm:block relative w-20 h-20 rounded-full overflow-hidden border-2 border-mehran-gold/60 shadow-lg shrink-0 bg-mehran-dark">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Grid of Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

