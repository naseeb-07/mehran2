"use client";

import React from "react";
import { restaurantInfo } from "@/data/restaurant";
import {
  Phone,
  Clock,
  MapPin,
  Mail,
  Users,
  Sparkles,
  MessageSquare,
  Navigation,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-mehran-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-mehran-emerald text-xs uppercase tracking-[0.25em] font-bold">
            <span className="w-8 h-[1px] bg-mehran-gold" />
            <span>Reservations & Inquiries</span>
            <span className="w-8 h-[1px] bg-mehran-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-mehran-dark">
            Visit & Contact Us
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We look forward to welcoming you and your family. Reach out to reserve our private traditional Majlis cabins or book the celebration party hall.
          </p>
        </div>

        {/* Contact Info & Inquiries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-mehran-border shadow-subtle space-y-6">
              <h3 className="font-serif text-2xl font-bold text-mehran-dark border-b border-mehran-border/70 pb-4">
                Restaurant Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${restaurantInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-serif text-base sm:text-lg font-bold text-mehran-dark hover:text-mehran-emerald transition-colors block"
                    >
                      {restaurantInfo.contact.phone}
                    </a>
                    <a
                      href={`tel:${restaurantInfo.contact.altPhone.replace(/[^0-9+]/g, "")}`}
                      className="text-xs text-neutral-600 hover:text-mehran-emerald transition-colors block mt-0.5"
                    >
                      {restaurantInfo.contact.altPhone}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
                      Opening Hours
                    </span>
                    <div className="font-bold text-sm sm:text-base text-mehran-dark">
                      11:30 AM – 11:30 PM
                    </div>
                    <div className="text-xs text-neutral-500">
                      Open 7 Days a Week (All Days)
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${restaurantInfo.contact.email}`}
                      className="text-sm font-medium text-mehran-dark hover:text-mehran-emerald transition-colors"
                    >
                      {restaurantInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Location / Directions */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mehran-emerald/10 text-mehran-emerald flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
                      Dining Location
                    </span>
                    <div className="text-sm font-medium text-mehran-dark">
                      {restaurantInfo.contact.address}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons: Google Maps & WhatsApp */}
              <div className="pt-4 border-t border-mehran-border/70 flex flex-wrap gap-4">
                <a
                  href={restaurantInfo.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-mehran-emerald text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:bg-mehran-forest transition-colors shadow-subtle"
                >
                  <Navigation className="w-4 h-4 text-mehran-gold" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={restaurantInfo.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors shadow-subtle"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Special Reservation Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Majlis Seating Card */}
            <div className="bg-mehran-dark text-white rounded-3xl p-6 sm:p-7 border border-mehran-gold/30 shadow-elevated space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-mehran-forest text-mehran-gold flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Private Majlis Dining
                  </h4>
                  <span className="text-xs text-mehran-gold">Authentic Arabian Tradition</span>
                </div>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Our private floor-seating Majlis areas provide unmatched privacy and comfort for families and large groups indulging in our signature Mandi platters.
              </p>
              <a
                href={`tel:${restaurantInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-mehran-goldLight hover:text-white"
              >
                <span>Call to reserve a Majlis cabin</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Party Hall Card */}
            <div className="bg-gradient-to-br from-mehran-maroon to-mehran-dark text-white rounded-3xl p-6 sm:p-7 border border-mehran-gold/30 shadow-elevated space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/30 text-mehran-gold flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Celebration Party Hall
                  </h4>
                  <span className="text-xs text-mehran-goldLight">Banquet & Special Occasions</span>
                </div>
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed font-light">
                Equipped for banquets, birthdays, anniversaries, and corporate feasts with customized multi-course dining menus and dedicated hospitality.
              </p>
              <a
                href={`tel:${restaurantInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-mehran-goldLight hover:text-white"
              >
                <span>Inquire about hall booking</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

