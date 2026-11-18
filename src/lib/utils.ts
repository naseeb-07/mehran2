import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string | number): string {
  if (typeof price === "number") {
    return `₹${price}`;
  }
  if (price === "ASP" || price === "--" || price === "--/--") {
    return price;
  }
  if (!price) return "";
  if (price.startsWith("₹")) return price;
  return `₹${price}`;
}

