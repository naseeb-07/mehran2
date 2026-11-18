import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mehran-deep": "#041c16",
        "mehran-surface": "#0a2e24",
        "mehran-border": "rgba(212, 175, 55, 0.25)",
        "mehran-gold": "#D4AF37",
        "mehran-gold-light": "#F3E5AB",
        "mehran-muted": "#9ab3aa",
        mehran: {
          deep: "#041c16",
          surface: "#0a2e24",
          dark: "#022421",
          emerald: "#033833",
          forest: "#06443E",
          teal: "#0B5951",
          accent: "#127065",
          gold: "#D4AF37",
          goldLight: "#F0D38D",
          goldDark: "#9F7E1B",
          ochre: "#D99B26",
          maroon: "#59251A",
          terracotta: "#7C3520",
          cream: "#FAF7F2",
          sand: "#F4EEE1",
          parchment: "#EDE5D5",
          border: "#E2D6C1",
          charcoal: "#1C2422",
          muted: "#9ab3aa",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F0D38D 0%, #D4AF37 50%, #B8860B 100%)",
        "radial-card": "radial-gradient(circle at top left, #0e3d30, #06221a)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Outfit", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(3, 56, 51, 0.06)',
        'elevated': '0 12px 36px -4px rgba(3, 56, 51, 0.12)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.3)',
        'card-dark': '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;

