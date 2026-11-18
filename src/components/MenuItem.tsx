"use client";

import React from "react";
import { MenuItem as MenuItemType } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Flame, Leaf, Sparkles } from "lucide-react";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-mehran-border/80 shadow-subtle hover:border-mehran-gold/60 hover:shadow-elevated transition-all flex flex-col justify-between group">
      <div>
        {/* Top Badges & Flags */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.isVeg && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Leaf className="w-2.5 h-2.5" />
                <span>Veg</span>
              </span>
            )}
            {item.isSpicy && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-red-50 text-red-600 border border-red-200">
                <Flame className="w-2.5 h-2.5" />
                <span>Spicy</span>
              </span>
            )}
            {item.badge && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                <Sparkles className="w-2.5 h-2.5 text-mehran-gold" />
                <span>{item.badge}</span>
              </span>
            )}
          </div>
        </div>

        {/* Item Name */}
        <h4 className="font-serif font-bold text-base sm:text-lg text-mehran-dark group-hover:text-mehran-emerald transition-colors leading-snug">
          {item.name}
        </h4>

        {/* Item Description */}
        {item.description && (
          <p className="text-xs text-neutral-600 leading-relaxed mt-1.5 font-normal">
            {item.description}
          </p>
        )}
      </div>

      {/* Pricing and Portion Options */}
      <div className="mt-4 pt-3 border-t border-mehran-border/60">
        
        {/* Case 1: Simple Single Price */}
        {item.price !== undefined && (
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              {item.price === "ASP" ? "Seasonal Price" : "Price"}
            </span>
            <span className="font-serif font-bold text-base sm:text-lg text-mehran-dark">
              {formatPrice(item.price)}
            </span>
          </div>
        )}

        {/* Case 2: Portion Array (e.g. Quarter / Half / 3/4 / Full or 5pc / 10pc) */}
        {item.portions && item.portions.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
            {item.portions.map((portion, idx) => (
              <div
                key={idx}
                className="bg-mehran-cream/80 border border-mehran-border/70 rounded-lg p-1.5"
              >
                <div className="text-[10px] uppercase font-medium text-neutral-500 tracking-tight truncate">
                  {portion.label}
                </div>
                <div className="font-serif font-bold text-xs sm:text-sm text-mehran-dark">
                  {formatPrice(portion.price)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case 3: Variation Groups (e.g. Veg, Chicken, Mutton, Bone, Boneless) */}
        {item.variations && item.variations.length > 0 && (
          <div className="space-y-1.5">
            {item.variations.map((vg, vIdx) => (
              <div
                key={vIdx}
                className="flex items-center justify-between text-xs bg-mehran-cream/60 rounded-lg px-2.5 py-1.5 border border-mehran-border/50"
              >
                <span className="font-semibold text-neutral-700">{vg.name}</span>
                <div className="flex items-center gap-2">
                  {vg.prices.map((p, pIdx) => (
                    <span key={pIdx} className="font-serif font-bold text-mehran-dark">
                      <span className="text-[10px] font-normal text-neutral-500 mr-1">
                        {p.label !== "Portion" && p.label !== "Vegetable" ? p.label : ""}:
                      </span>
                      {formatPrice(p.price)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note if available */}
        {item.note && (
          <div className="mt-2 text-[10px] text-neutral-500 italic">
            * {item.note}
          </div>
        )}
      </div>
    </div>
  );
}

