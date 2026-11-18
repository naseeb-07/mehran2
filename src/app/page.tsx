import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import SignatureDishes from "@/components/SignatureDishes";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import RestaurantStory from "@/components/RestaurantStory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-mehran-cream">
      {/* 1. Navigation Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Restaurant Introduction */}
      <Introduction />

      {/* 4. Signature Specialities */}
      <SignatureDishes />

      {/* 5. About Mehran */}
      <About />

      {/* 6. Complete Digital Menu */}
      <Menu />

      {/* 7. Restaurant Gallery */}
      <Gallery />

      {/* 8. Restaurant Story & Brands */}
      <RestaurantStory />

      {/* 9. Contact and Location */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}

