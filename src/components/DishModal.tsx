"use client";

import React from "react";
import Image from "next/image";
import { MenuItemData } from "@/data/menuData";
import { formatPrice } from "@/lib/utils";

interface DishModalProps {
  dish: MenuItemData | null;
  onClose: () => void;
}

export default function DishModal({ dish, onClose }: DishModalProps) {
  if (!dish) return null;

  const isVeg = dish.diet === "veg";
  const waText = encodeURIComponent(
    `Hello Mehran Restaurant, I would like to order: ${dish.name} (${dish.price}).`
  );
  const waUrl = `https://wa.me/917349746455?text=${waText}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-mehran-surface border border-mehran-gold/50 rounded-3xl overflow-hidden shadow-2xl text-white space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/60 text-gray-300 hover:text-white flex items-center justify-center border border-white/20 transition-colors"
          aria-label="Close dish modal"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        {/* Dish Image Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-mehran-deep overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mehran-surface via-transparent to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-md">
              <span
                className={`w-3 h-3 rounded-full ${
                  isVeg ? "bg-emerald-600" : "bg-red-600"
                }`}
              ></span>
            </div>
            {dish.special && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-gold-gradient text-black shadow-md flex items-center gap-1">
                <i className="fa-solid fa-crown text-[9px]"></i>
                <span>Chef&apos;s Choice</span>
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 pt-0 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-mehran-gold-light block mb-1">
                {dish.subCategoryName || dish.categoryName}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {dish.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="font-serif text-xl sm:text-2xl font-extrabold text-mehran-gold-light whitespace-nowrap block">
                {dish.price}
              </span>
              <span className="text-[11px] text-gray-400 block mt-0.5">
                {dish.portion}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-mehran-muted leading-relaxed font-light">
            {dish.description}
          </p>

          {/* Portions Matrix if available */}
          {dish.portions && dish.portions.length > 0 && (
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-semibold text-gray-300 block uppercase tracking-wider">
                Available Portions:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dish.portions.map((p, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-xl bg-mehran-deep border border-mehran-border text-center"
                  >
                    <span className="text-[10px] text-gray-400 uppercase block truncate">
                      {p.label}
                    </span>
                    <span className="font-serif font-bold text-xs sm:text-sm text-mehran-gold-light block">
                      {formatPrice(p.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Variations if available */}
          {dish.variations && dish.variations.length > 0 && (
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-semibold text-gray-300 block uppercase tracking-wider">
                Variations:
              </span>
              <div className="space-y-1">
                {dish.variations.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded-lg bg-mehran-deep border border-mehran-border text-xs"
                  >
                    <span className="font-semibold text-white">{v.name}</span>
                    <div className="flex items-center gap-2">
                      {v.prices.map((vp, vpi) => (
                        <span key={vpi} className="font-serif font-bold text-mehran-gold-light">
                          {formatPrice(vp.price)}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-gray-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

