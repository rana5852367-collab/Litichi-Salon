"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const colors = {
    charcoal: "#2A2A2A",
    brownDark: "#3D352B",
    gold: "#C9A14A",
    beige1: "#D6B983",
    beige2: "#C8A66F",
    brown1: "#A8753E",
    brown2: "#8C4B1F",
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full backdrop-blur-md z-50 border-b"
      style={{
        backgroundColor: "white", 
        borderColor: colors.gold,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Image Container */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Replace '/logo.png' with your actual logo path */}
            <Image
              src="/logo.svg" // Put your logo in public/logo.png
              alt=""
              width={60}
              height={60}
              className="object-contain"
              priority
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            
            {/* Fallback Icon (shown if image fails) */}
            <div 
              className="hidden w-12 h-12 rounded-full items-center justify-center font-bold text-xl"
              style={{ 
                backgroundColor: colors.gold,
                color: 'white'
              }}
            >
              L
            </div>
          </motion.div>
        </Link>

        {/* Center Menu */}
        <ul className="hidden md:flex justify-center gap-10 font-medium">
          <li className="relative group">
            <Link href="/" className="relative inline-block">
              <span style={{ color: colors.gold }}>Home</span>
              <span
                className="absolute left-0 -bottom-1  transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: colors.gold }}
              ></span>
            </Link>
          </li>

          {/* Services with Mega Menu */}
          <li className="relative group">
            <Link href="/services" className="relative inline-block">
              <span style={{ color: colors.gold }}>Services</span>
              <span
                className="absolute left-0 -bottom-1 w-0  transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: colors.gold }}
              ></span>
            </Link>
            <div
              className="absolute left-0 top-full mt-2 w-200 shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 rounded-xl"
              style={{
                backgroundColor: "white",
                borderColor: colors.brown2,
                borderStyle: "solid",
              }}
            >
              <div className="grid grid-cols-3 gap-6 p-6">
                <div>
                  <h3 className="font-bold mb-2" style={{ color: colors.gold }}>Hair</h3>
                  <ul>
                    <li><Link href="/services/haircut" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Haircut</Link></li>
                    <li><Link href="/services/color" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Hair Color</Link></li>
                    <li><Link href="/services/styling" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Styling</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: colors.gold }}>Skin</h3>
                  <ul>
                    <li><Link href="/services/facial" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Facial</Link></li>
                    <li><Link href="/services/massage" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Massage</Link></li>
                    <li><Link href="/services/body" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Body Treatments</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: colors.gold }}>Nails</h3>
                  <ul>
                    <li><Link href="/services/manicure" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Manicure</Link></li>
                    <li><Link href="/services/pedicure" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Pedicure</Link></li>
                    <li><Link href="/services/nailart" className="block py-1 hover:text-gold" style={{ color: colors.charcoal }}>Nail Art</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group">
            <Link href="/about" className="relative inline-block">
              <span style={{ color: colors.gold }}>About</span>
              <span
                className="absolute left-0 -bottom-1 w-0  transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: colors.gold }}
              ></span>
            </Link>
          </li>

          <li className="relative group">
            <Link href="/offer" className="relative inline-block">
              <span style={{ color: colors.gold }}>Offers</span>
              <span
                className="absolute left-0 -bottom-1 w-0  transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: colors.gold }}
              ></span>
            </Link>
          </li>

          <li className="relative group">
            <Link href="/academy" className="relative inline-block">
              <span style={{ color: colors.gold }}>Academy</span>
              <span
                className="absolute left-0 -bottom-1 w-0  transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: colors.gold }}
              ></span>
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: colors.gold, color: colors.charcoal }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block border px-6 py-2 rounded-full font-semibold transition duration-300 hover:shadow-lg"
            style={{ borderColor: colors.charcoal, color: colors.gold }}
          >
            <a href="/contact" className="block w-full h-full">Contact us</a>
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-4 text-2xl font-bold"
            style={{ color: colors.gold }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{ backgroundColor: "rgba(214,185,131,0.15)", borderTop: `1px solid ${colors.brown2}` }}
        >
          <ul className="flex flex-col gap-4 p-6" style={{ color: colors.gold }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="#offers">Offers</Link></li>
            <li><Link href="#academy">Academy</Link></li>
            <li>
              <Link
                href="#contact"
                className="block px-6 py-2 rounded-full text-center mt-2"
                style={{ border: `1px solid ${colors.gold}`, color: colors.gold }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}