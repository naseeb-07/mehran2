export type PortionPrice = {
  label: string; // e.g. "Qtr", "Half", "3/4", "Full", "5 PC", "10 PC", "Bone", "Boneless", etc.
  price: string | number; // e.g. 250, "1800", "ASP", "--"
};

export type VariationGroup = {
  name: string; // e.g. "Veg", "Chicken", "Mutton", "Egg", "Gobi", "Paneer"
  prices: PortionPrice[];
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: string | number; // for single price items
  portions?: PortionPrice[]; // for quarter/half/full or piece counts
  variations?: VariationGroup[]; // for multi-tier like veg/chicken/mutton
  isVeg?: boolean;
  isSpicy?: boolean;
  isSignature?: boolean;
  image?: string;
  badge?: string; // e.g. "House Signature", "Chef's Special", "Royal Selection"
  note?: string;
};

export type SubCategory = {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
  image?: string;
  headerNote?: string;
};

export type MenuSectionGroup = {
  id: string;
  groupCode: string; // "A", "B", "C", "D", "E"
  title: string;
  subtitle: string;
  categories: SubCategory[];
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "mandi" | "bbq" | "starters" | "specials" | "breads" | "biryani";
  imageUrl: string;
  description: string;
  tag?: string;
};

export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  highlights?: string[];
};

export type RestaurantBrand = {
  name: string;
  tagline: string;
  description: string;
  image: string;
};

