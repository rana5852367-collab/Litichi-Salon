"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  // Day Mode Color Palette
  const colors = {
    background: "#FFFBF5",      // Warm white
    cardBg: "#FFFFFF",           // Pure white
    gold: "#C9A14A",             // Elegant gold
    darkGold: "#B8860B",         // Darker gold
    lightGold: "#F4E4C1",        // Light gold background
    text: "#2A2A2A",             // Dark charcoal text
    textMuted: "#6B6B6B",        // Muted gray text
    lightBeige: "#FFF8F0",       // Light beige
    accent: "#E8D5B7",           // Soft accent
  };

  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/makup.jpg"
              alt="About Salon"
              width={600}
              height={700}
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            
            {/* Image Overlay on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              style={{ backgroundColor: colors.gold }}
            />
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-6 rounded-xl shadow-2xl border-4"
            style={{ 
              backgroundColor: colors.gold,
              borderColor: colors.background,
            }}
          >
            <div className="px-8 py-6 text-center">
              <h3 
                className="text-4xl font-bold mb-1"
                style={{ color: colors.background }}
              >
                10+
              </h3>
              <p 
                className="text-sm font-semibold tracking-wide"
                style={{ color: colors.background }}
              >
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div 
            className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
            style={{ backgroundColor: colors.gold }}
          />
          <div 
            className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-15 blur-2xl"
            style={{ backgroundColor: colors.darkGold }}
          />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span 
              className="px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase"
              style={{ 
                backgroundColor: colors.lightGold,
                color: colors.gold,
              }}
            >
              About Our Salon
            </span>
          </motion.div>

          {/* Heading */}
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: colors.text }}
          >
            We Provide The Best Beauty Services
            <span style={{ color: colors.gold }}> For Your Luxury Experience</span>
          </h2>

          {/* Description */}
          <p 
            className="mb-6 leading-relaxed text-lg"
            style={{ color: colors.textMuted }}
          >
            Our salon provides premium beauty services using modern techniques
            and high quality products. Our professional team ensures that every
            customer feels relaxed, confident and beautiful.
          </p>

          <p 
            className="mb-8 leading-relaxed text-lg"
            style={{ color: colors.textMuted }}
          >
            We specialize in hair styling, makeup, skin care, manicure and
            pedicure services. Our goal is to deliver luxury experience and
            customer satisfaction.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              "Premium Products",
              "Professional Staff", 
              "Luxury Environment",
              "Affordable Price"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: colors.lightBeige }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.gold }}
                >
                  <span 
                    className="text-xl font-bold"
                    style={{ color: colors.background }}
                  >
                    ✓
                  </span>
                </div>
                <p 
                  className="font-medium"
                  style={{ color: colors.text }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: colors.gold,
              color: colors.background,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.darkGold;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.gold;
            }}
          >
            Learn More About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}