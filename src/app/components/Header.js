"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Mega from "./Mega";
import { serviceCategories } from "../data/megaMenuData";
import { ChevronDown, X, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const colors = {
    background: "#FFFBF5",
    cardBg: "#FFFFFF",
    gold: "#C9A14A",
    darkGold: "#B8860B",
    lightGold: "#F4E4C1",
    text: "#2A2A2A",
    textMuted: "#6B6B6B",
    border: "#E8D5B7",
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setMegaMenuOpen(true);
  };

  const handleAllServicesClick = () => {
    setActiveCategory(null);
    setMegaMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMegaMenuOpen(false);
    setActiveCategory(null);
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Offers", href: "/offer" },
    { name: "Academy", href: "/academy" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full backdrop-blur-lg z-50 border-b shadow-sm"
        style={{
          backgroundColor: `${colors.cardBg}f5`,
          borderColor: colors.border,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={closeMenu}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/logo.svg"
                  alt="Litchi Salon Logo"
                  width={50}
                  height={50}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                  priority
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Logo */}
                <div 
                  className="hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full items-center justify-center font-bold text-lg sm:text-xl shadow-md"
                  style={{ 
                    backgroundColor: colors.gold,
                    color: colors.cardBg
                  }}
                >
                  L
                </div>
              </motion.div>

              {/* Salon Name - Hidden on mobile */}
              <div className="hidden sm:block">
                <h1 
                  className="text-lg sm:text-xl font-bold tracking-tight"
                  style={{ color: colors.gold }}
                >
                  Litchi Beauti Salon
                </h1>
                <p 
                  className="text-xs"
                  style={{ color: colors.textMuted }}
                >
                  Your Beauty, Our Passion
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Home Link */}
              <li>
                <Link 
                  href="/"
                  className="relative px-4 py-2 rounded-lg transition-all duration-300 group"
                  style={{ color: colors.text }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.lightGold;
                    e.currentTarget.style.color = colors.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.text;
                  }}
                >
                  <span className="font-medium">Home</span>
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 rounded-full"
                    style={{ backgroundColor: colors.gold }}
                  />
                </Link>
              </li>

              {/* Services with Mega Menu */}
              <li 
                className="relative"
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
                  className="relative px-4 py-2 rounded-lg transition-all duration-300 group flex items-center gap-1"
                  style={{ color: colors.text }}
                  onClick={handleAllServicesClick}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.lightGold;
                    e.currentTarget.style.color = colors.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.text;
                  }}
                >
                  <span className="font-medium">Services</span>
                  <motion.div
                    animate={{ rotate: servicesMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 rounded-full"
                    style={{ backgroundColor: colors.gold }}
                  />
                </button>
                
                {/* Category Dropdown */}
                <AnimatePresence>
                  {servicesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-56 rounded-xl shadow-xl overflow-hidden border"
                      style={{
                        backgroundColor: colors.cardBg,
                        borderColor: colors.border,
                      }}
                    >
                      <div 
                        className="p-2"
                        style={{ backgroundColor: colors.background }}
                      >
                        <p 
                          className="px-3 py-2 text-xs font-semibold uppercase tracking-wider"
                          style={{ color: colors.textMuted }}
                        >
                          Browse by Category
                        </p>
                        <ul className="space-y-1">
                          {serviceCategories.map((cat) => (
                            <li key={cat.id}>
                              <button
                                onClick={() => handleCategoryClick(cat.id)}
                                className="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                                style={{ color: colors.text }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = colors.lightGold;
                                  e.currentTarget.style.color = colors.gold;
                                  e.currentTarget.style.paddingLeft = "1rem";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = "transparent";
                                  e.currentTarget.style.color = colors.text;
                                  e.currentTarget.style.paddingLeft = "0.75rem";
                                }}
                              >
                                {cat.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Mega isOpen={megaMenuOpen} category={activeCategory} />
              </li>

              {/* Other Links */}
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="relative px-4 py-2 rounded-lg transition-all duration-300 group"
                    style={{ color: colors.text }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.lightGold;
                      e.currentTarget.style.color = colors.gold;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = colors.text;
                    }}
                  >
                    <span className="font-medium">{link.name}</span>
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 rounded-full"
                      style={{ backgroundColor: colors.gold }}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 sm:px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 shadow-sm"
                  style={{ 
                    borderColor: colors.gold,
                    color: colors.gold,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.gold;
                    e.currentTarget.style.color = colors.cardBg;
                    e.currentTarget.style.boxShadow = `0 4px 6px rgba(201, 161, 74, 0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.gold;
                    e.currentTarget.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
                  }}
                >
                  Contact Us
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{ color: colors.gold }}
                onClick={() => setMenuOpen(!menuOpen)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.lightGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full sm:w-80 z-50 lg:hidden shadow-2xl overflow-y-auto"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Mobile Menu Header */}
              <div 
                className="flex items-center justify-between p-4 border-b"
                style={{ borderColor: colors.border }}
              >
                <h2 
                  className="text-lg font-bold"
                  style={{ color: colors.gold }}
                >
                  Menu
                </h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg transition-colors"
                  style={{ color: colors.text }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.lightGold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="p-4">
                {!activeCategory ? (
                  <ul className="space-y-2">
                    {/* Home */}
                    <li>
                      <Link 
                        href="/home"
                        onClick={closeMenu}
                        className="block py-3 px-4 rounded-lg font-medium transition-colors"
                        style={{ color: colors.text }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.lightGold;
                          e.currentTarget.style.color = colors.gold;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = colors.text;
                        }}
                      >
                        Home
                      </Link>
                    </li>

                    {/* Services Section */}
                    <li>
                      <div 
                        className="py-3 px-4 rounded-lg font-medium mb-2"
                        style={{ 
                          backgroundColor: colors.lightGold,
                          color: colors.gold 
                        }}
                      >
                        Services
                      </div>
                      <div className="grid grid-cols-2 gap-2 px-2">
                        {serviceCategories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.id)}
                            className="py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 border"
                            style={{ 
                              color: colors.text,
                              borderColor: colors.border,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = colors.lightGold;
                              e.currentTarget.style.borderColor = colors.gold;
                              e.currentTarget.style.color = colors.gold;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "transparent";
                              e.currentTarget.style.borderColor = colors.border;
                              e.currentTarget.style.color = colors.text;
                            }}
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    </li>

                    {/* Other Links */}
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          onClick={closeMenu}
                          className="block py-3 px-4 rounded-lg font-medium transition-colors"
                          style={{ color: colors.text }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.lightGold;
                            e.currentTarget.style.color = colors.gold;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = colors.text;
                          }}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}

                    {/* Contact Button */}
                    <li className="pt-4">
                      <Link href="/contact" onClick={closeMenu}>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-3 px-6 rounded-full font-bold transition-all duration-300 shadow-md"
                          style={{ 
                            backgroundColor: colors.gold,
                            color: colors.cardBg,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.darkGold;
                            e.currentTarget.style.boxShadow = `0 6px 8px rgba(201, 161, 74, 0.3)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = colors.gold;
                            e.currentTarget.style.boxShadow = `0 4px 6px rgba(0, 0, 0, 0.1)`;
                          }}
                        >
                          Contact Us
                        </motion.button>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  // Category Services View
                  <div>
                    <button 
                      onClick={() => {
                        setActiveCategory(null);
                        setMegaMenuOpen(false);
                      }}
                      className="flex items-center gap-2 py-2 px-4 rounded-lg font-medium mb-4 transition-colors"
                      style={{ color: colors.gold }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.lightGold;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      ← Back to Menu
                    </button>
                    
                    <h3 
                      className="text-lg font-bold mb-4 px-2"
                      style={{ color: colors.text }}
                    >
                      {serviceCategories.find(cat => cat.id === activeCategory)?.name}
                    </h3>
                    
                    <ul className="space-y-2">
                      {/* Add your service items here based on activeCategory */}
                      <li>
                        <p 
                          className="px-4 py-2 text-sm"
                          style={{ color: colors.textMuted }}
                        >
                          Services will be displayed here
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}