"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Academy() {
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
    accent: "#E8D5B7",           // Soft accent
  };

  const features = [
    { text: "Professional Certification", icon: "🎓" },
    { text: "Expert Trainers", icon: "👨‍🏫" },
    { text: "Hands-on Practical Training", icon: "✋" },
    { text: "Job Opportunities Support", icon: "💼" },
  ];

  return (
    <section 
      className="py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Content Side - Now on LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
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
              className="px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase flex items-center gap-2"
              style={{ 
                backgroundColor: colors.lightGold,
                color: colors.gold,
              }}
            >
              <span>📚</span>
              Our Academy
            </span>
          </motion.div>

          {/* Heading */}
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: colors.text }}
          >
            Professional Beauty Courses
            <span style={{ color: colors.gold }}> To Build Your Career</span>
          </h2>

          {/* Description */}
          <p 
            className="mb-6 leading-relaxed text-lg"
            style={{ color: colors.textMuted }}
          >
            Our Beauty Academy provides professional training in hair styling,
            makeup, skin care, and salon management. Learn from industry experts
            with practical experience.
          </p>

          <p 
            className="mb-8 leading-relaxed text-lg"
            style={{ color: colors.textMuted }}
          >
            We help students develop skills and confidence to start their own
            salon or work professionally in the beauty industry.
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md group"
                style={{ backgroundColor: colors.lightBeige }}
              >
                {/* Icon Circle */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: colors.gold }}
                >
                  {feature.icon}
                </div>

                {/* Text */}
                <p 
                  className="font-semibold text-lg"
                  style={{ color: colors.text }}
                >
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-xl"
            style={{ backgroundColor: colors.cardBg, border: `2px solid ${colors.accent}` }}
          >
            <div className="text-center">
              <h4 
                className="text-3xl font-bold mb-1"
                style={{ color: colors.gold }}
              >
                500+
              </h4>
              <p 
                className="text-sm"
                style={{ color: colors.textMuted }}
              >
                Students Trained
              </p>
            </div>
            <div className="text-center border-x" style={{ borderColor: colors.accent }}>
              <h4 
                className="text-3xl font-bold mb-1"
                style={{ color: colors.gold }}
              >
                95%
              </h4>
              <p 
                className="text-sm"
                style={{ color: colors.textMuted }}
              >
                Job Placement
              </p>
            </div>
            <div className="text-center">
              <h4 
                className="text-3xl font-bold mb-1"
                style={{ color: colors.gold }}
              >
                15+
              </h4>
              <p 
                className="text-sm"
                style={{ color: colors.textMuted }}
              >
                Expert Trainers
              </p>
            </div>
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
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
            Enroll Now
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>

        {/* Image Side - Now on RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/student.jpg"
              alt="Beauty Academy"
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

          {/* Floating Badge - Top Left */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="absolute top-6 left-6 rounded-xl shadow-2xl backdrop-blur-sm border-4"
            style={{ 
              backgroundColor: colors.gold,
              borderColor: colors.background,
            }}
          >
            <div className="px-6 py-4 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <h3 
                  className="font-bold text-lg leading-tight"
                  style={{ color: colors.background }}
                >
                  Certified Training
                </h3>
                <p 
                  className="text-xs font-medium"
                  style={{ color: colors.background, opacity: 0.9 }}
                >
                  Recognized Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Stats Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-6 rounded-2xl shadow-2xl border-4 p-6"
            style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.gold,
            }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl">⭐</span>
                <h4 
                  className="text-4xl font-bold"
                  style={{ color: colors.gold }}
                >
                  4.9
                </h4>
              </div>
              <p 
                className="text-sm font-semibold"
                style={{ color: colors.textMuted }}
              >
                Student Rating
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div 
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: colors.gold }}
          />
          <div 
            className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full opacity-15 blur-3xl"
            style={{ backgroundColor: colors.darkGold }}
          />
        </motion.div>
      </div>
    </section>
  );
}