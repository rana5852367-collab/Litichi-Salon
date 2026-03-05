"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Hair Styling",
    description:
      "Get modern and stylish haircut from our professional stylists using premium tools.",
    price: "Rs. 1500",
    image: "/hair.jpg",
    icon: "✂️",
  },
  {
    title: "Facial Treatment",
    description:
      "Luxury facial treatment for glowing, healthy and fresh skin using branded products.",
    price: "Rs. 2500",
    image: "/facial.jpg",
    icon: "✨",
  },
  {
    title: "Makeup Service",
    description:
      "Professional bridal and party makeup to enhance your beauty and confidence.",
    price: "Rs. 5000",
    image: "/makup.jpg",
    icon: "💄",
  },
  {
    title: "Manicure",
    description:
      "Premium manicure service to clean, shape and beautify your hands and nails.",
    price: "Rs. 1800",
    image: "/menicure.jpg",
    icon: "💅",
  },
  {
    title: "Pedicure",
    description:
      "Relaxing pedicure treatment to refresh, clean and soften your feet.",
    price: "Rs. 2000",
    image: "/pedicure.jpg",
    icon: "🦶",
  },
];

export default function ServicesShowcase() {
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

  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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
              What We Offer
            </span>
          </motion.div>

          {/* Heading */}
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            Our Luxury <span style={{ color: colors.gold }}>Services</span>
          </h2>

          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.textMuted }}
          >
            Discover our premium beauty services designed to make you look and feel amazing
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-lg hover:shadow-2xl relative"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.border,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.gold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.border;
              }}
            >
              {/* Image Container */}
              <div className="overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${colors.gold})`
                  }}
                />

                {/* Price Badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 rounded-full text-sm font-bold px-5 py-2 shadow-lg"
                  style={{ 
                    backgroundColor: colors.gold,
                    color: colors.cardBg,
                  }}
                >
                  {service.price}
                </motion.div>

                {/* Icon Badge */}
                <div 
                  className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${colors.cardBg}dd`,
                  }}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 
                  className="text-2xl font-bold mb-3 group-hover:text-opacity-80 transition-all duration-300"
                  style={{ color: colors.gold }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base mb-6 leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {service.description}
                </p>

                {/* Divider */}
                <div 
                  className="w-full h-px mb-6"
                  style={{ backgroundColor: colors.lightGold }}
                />

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
                  style={{ 
                    backgroundColor: colors.gold,
                    color: colors.cardBg,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.darkGold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.gold;
                  }}
                >
                  <span className="relative z-10"> <a href="bookopointment" className="text-white no-underline">Book Appointment</a></span>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}
                  />
                </motion.button>
              </div>

              {/* Corner Decoration */}
              <div 
                className="absolute bottom-0 right-0 w-20 h-20 opacity-10 rounded-tl-full"
                style={{ backgroundColor: colors.gold }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p 
            className="text-lg mb-6"
            style={{ color: colors.textMuted }}
          >
            Can't find what you're looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-bold border-2 transition-all duration-300"
            style={{
              borderColor: colors.gold,
              color: colors.gold,
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.gold;
              e.currentTarget.style.color = colors.cardBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = colors.gold;
            }}
          >
            <a href="/services" className="text-white no-underline">View All Services</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}