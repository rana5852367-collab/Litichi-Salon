"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Mega from "./Mega";
import { serviceCategories } from "../data/megaMenuData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const colors = {
    charcoal: "#2A2A2A",
    brownDark: "#3D352B",
    gold: "#C9A14A",
    beige1: "#D6B983",
    beige2: "#C8A66F",
    brown1: "#A8753E",
    brown2: "#8C4B1F",
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setMegaMenuOpen(true);
  };

  const handleAllServicesClick = () => {
    setActiveCategory(null);
    setMegaMenuOpen(true);
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
        
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
        <ul className="hidden md:flex justify-center gap-8 font-medium">
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
          <li 
            className="relative group"
            onMouseEnter={() => {
              setServicesMenuOpen(true);
              setMegaMenuOpen(true);
              setActiveCategory(null);
            }}
            onMouseLeave={() => {
              setServicesMenuOpen(false);
              setMegaMenuOpen(false);
            }}
          >
            <button 
              className="relative inline-block cursor-pointer"
              onClick={handleAllServicesClick}
            >
              <span style={{ color: colors.gold }}>Services</span>
              <span
                className="absolute left-0 -bottom-1 w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: colors.gold }}
              ></span>
            </button>
            
            {/* Category Links */}
            <div 
              className={`absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg z-40 transition-all duration-300 ${
                servicesMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <ul className="py-2">
                {serviceCategories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryClick(cat.id)}
                      className="w-full text-left px-4 py-2 hover:bg-amber-50 transition-colors"
                      style={{ color: colors.charcoal }}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <Mega isOpen={megaMenuOpen} category={activeCategory} />
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

      {/* Mobile Menu with Mega Menu */}
      {(menuOpen || megaMenuOpen) && (
        <div
          className="md:hidden"
          style={{ backgroundColor: "white", borderTop: `1px solid ${colors.brown2}` }}
        >
          {!activeCategory ? (
            <ul className="flex flex-col gap-2 p-4" style={{ color: colors.charcoal }}>
              <li>
                <Link href="/" className="block py-3 px-4 rounded-lg hover:bg-amber-50">
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={handleAllServicesClick}
                  className="w-full text-left py-3 px-4 rounded-lg hover:bg-amber-50 flex justify-between items-center"
                >
                  <span>Services</span>
                  <span style={{ color: colors.gold }}>→</span>
                </button>
              </li>
              {/* Mobile Category Links */}
              <li className="px-4 py-2">
                <p className="text-xs font-semibold text-gray-500 mb-2">Categories</p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="py-2 px-3 text-sm rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors"
                      style={{ color: colors.charcoal }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </li>
              <li>
                <Link href="/about" className="block py-3 px-4 rounded-lg hover:bg-amber-50">
                  About
                </Link>
              </li>
              <li>
                <Link href="/offer" className="block py-3 px-4 rounded-lg hover:bg-amber-50">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="/academy" className="block py-3 px-4 rounded-lg hover:bg-amber-50">
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-6 py-3 rounded-full text-center mt-2"
                  style={{ backgroundColor: colors.gold, color: 'white' }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          ) : (
            // Mobile: Show category services
            <div className="p-4">
              <button 
                onClick={() => {
                  setActiveCategory(null);
                  setMegaMenuOpen(false);
                }}
                className="mb-4 flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-amber-50"
                style={{ color: colors.gold }}
              >
                ← Back to Menu
              </button>
              <ul className="space-y-2">
                {megaMenuData
                  .filter(item => item.id === activeCategory)
                  .map(categoryItem => 
                    categoryItem.services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          href={service.link}
                          className="block py-3 px-4 rounded-lg bg-gray-50 hover:bg-amber-50"
                          style={{ color: colors.charcoal }}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))
                  )}
              </ul>
            </div>
          )}
        </div>
      )}
    </motion.nav>
  );
}
