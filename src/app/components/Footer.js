"use client";

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  // Day Mode Color Palette
  const colors = {
    background: "#FFFBF5",      // Warm white
    cardBg: "#FFFFFF",           // Pure white
    gold: "#C9A14A",             // Elegant gold
    darkGold: "#B8860B",         // Darker gold
    lightGold: "#F4E4C1",        // Light gold
    text: "#2A2A2A",             // Dark charcoal
    textMuted: "#6B6B6B",        // Muted gray
    lightBeige: "#FFF8F0",       // Light beige
    border: "#E8D5B7",           // Soft border
  };

  const services = [
   
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Booking", link: "/booking" },
    { name: "Contact", link: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, link: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, link: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, link: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer 
      className="border-t-2"
      style={{ 
        backgroundColor: colors.lightBeige,
        borderColor: colors.border,
      }}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
              style={{ 
                backgroundColor: colors.gold,
                color: colors.background,
              }}
            >
              L
            </div>
            <h2 
              className="text-2xl font-bold"
              style={{ color: colors.gold }}
            >
              Litchi Salon
            </h2>
          </div>

          {/* Description */}
          <p 
            className="mb-6 leading-relaxed"
            style={{ color: colors.textMuted }}
          >
            Experience luxury beauty services with professional care. 
            We make you look and feel your best.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2"
                style={{ 
                  backgroundColor: colors.cardBg,
                  borderColor: colors.gold,
                  color: colors.gold,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.gold;
                  e.currentTarget.style.color = colors.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.cardBg;
                  e.currentTarget.style.color = colors.gold;
                }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Services */}
   
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-xl font-bold mb-6 flex items-center gap-2 "
            style={{ color: colors.text }}
          >
            <span 
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: colors.gold }}
            />
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.link}
                  className="flex items-center gap-2 transition-all duration-300 group"
                  style={{ color: colors.textMuted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                >
                  <span 
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:w-3"
                    style={{ backgroundColor: colors.gold }}
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-xl font-bold mb-6 flex items-center gap-3"
            style={{ color: colors.text }}
          >
            <span 
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: colors.gold }}
            />
            Contact Us
          </h3>

          <div className="space-y-4">
            {/* Address */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300"
              style={{ backgroundColor: colors.cardBg }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.lightGold }}
              >
                <MapPin size={16} style={{ color: colors.gold }} />
              </div>
              <p style={{ color: colors.textMuted }}>
                Bahawalnagar, Pakistan
              </p>
            </motion.div>

            {/* Phone */}
            <motion.a
              href="tel:+923001234567"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
              style={{ backgroundColor: colors.cardBg }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.lightGold }}
              >
                <Phone size={16} style={{ color: colors.gold }} />
              </div>
              <p style={{ color: colors.textMuted }}>
                +92 300 1234567
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@litchi.com"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
              style={{ backgroundColor: colors.cardBg }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors.lightGold }}
              >
                <Mail size={16} style={{ color: colors.gold }} />
              </div>
              <p style={{ color: colors.textMuted }}>
                info@litchi.com
              </p>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div 
        className="border-t-2 py-6"
        style={{ borderColor: colors.border }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p 
              className="text-sm"
              style={{ color: colors.textMuted }}
            >
              © 2026 Litchi Beauty Salon. All Rights Reserved. Designed by SoftCentric.
            </p>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="transition-colors duration-300"
                style={{ color: colors.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textMuted;
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-300"
                style={{ color: colors.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textMuted;
                }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}