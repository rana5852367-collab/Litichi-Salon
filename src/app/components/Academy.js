"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Academy() {
  const colors = {
    background: "#FFFBF5",
    cardBg: "#FFFFFF",
    gold: "#C9A14A",
    darkGold: "#B8860B",
    lightGold: "#F4E4C1",
    text: "#2A2A2A",
    textMuted: "#6B6B6B",
    lightBeige: "#FFF8F0",
    accent: "#E8D5B7",
  };

  const features = [
    { text: "Professional Certification", icon: "🎓" },
    { text: "Expert Trainers", icon: "👨‍🏫" },
    { text: "Hands-on Practical Training", icon: "✋" },
    { text: "Job Opportunities Support", icon: "💼" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
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
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2"
              style={{ backgroundColor: colors.lightGold, color: colors.gold }}
            >
              📚 Our Academy
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: colors.text }}>
            Professional Beauty Courses
            <span style={{ color: colors.gold }}> To Build Your Career</span>
          </h2>

          {/* Description */}
          <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-lg" style={{ color: colors.textMuted }}>
            Our Beauty Academy provides professional training in hair styling, makeup, skin care, and salon management. Learn from industry experts with practical experience.
          </p>

          <p className="mb-6 sm:mb-8 leading-relaxed text-sm sm:text-lg" style={{ color: colors.textMuted }}>
            We help students develop skills and confidence to start their own salon or work professionally in the beauty industry.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:shadow-md group"
                style={{ backgroundColor: colors.lightBeige }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: colors.gold }}
                >
                  {feature.icon}
                </div>
                <p className="font-semibold text-sm sm:text-lg" style={{ color: colors.text }}>
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 p-5 sm:p-6 rounded-xl"
            style={{ backgroundColor: colors.cardBg, border: `2px solid ${colors.accent}` }}
          >
            <div className="text-center">
              <h4 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: colors.gold }}>500+</h4>
              <p className="text-xs sm:text-sm" style={{ color: colors.textMuted }}>Students Trained</p>
            </div>
            <div className="text-center border-y sm:border-x sm:border-y-0" style={{ borderColor: colors.accent }}>
              <h4 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: colors.gold }}>95%</h4>
              <p className="text-xs sm:text-sm" style={{ color: colors.textMuted }}>Job Placement</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: colors.gold }}>15+</h4>
              <p className="text-xs sm:text-sm" style={{ color: colors.textMuted }}>Expert Trainers</p>
            </div>
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl inline-flex items-center gap-2 sm:gap-3 transition-all duration-300"
            style={{ backgroundColor: colors.gold, color: colors.background }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.darkGold; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = colors.gold; }}
          >
            Enroll Now
            <span className="text-base sm:text-xl">→</span>
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group w-full max-w-md mx-auto md:mx-0 md:max-w-none"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/student.jpg"
              alt="Beauty Academy"
              width={600}
              height={700}
              className="object-cover w-full h-auto group-hover:scale-105 transition duration-500"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              style={{ backgroundColor: colors.gold }}
            />
          </div>

          {/* Floating Badges */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 rounded-xl shadow-2xl backdrop-blur-sm border-2 sm:border-4 p-3 sm:p-4"
            style={{ backgroundColor: colors.gold, borderColor: colors.background }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-3xl">🏆</span>
              <div>
                <h3 className="font-bold text-xs sm:text-lg leading-tight" style={{ color: colors.background }}>
                  Certified Training
                </h3>
                <p className="text-[10px] sm:text-xs font-medium" style={{ color: colors.background, opacity: 0.9 }}>
                  Recognized Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 rounded-2xl shadow-2xl border-2 sm:border-4 p-4 sm:p-6"
            style={{ backgroundColor: colors.cardBg, borderColor: colors.gold }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <span className="text-2xl sm:text-3xl">⭐</span>
                <h4 className="text-3xl sm:text-4xl font-bold" style={{ color: colors.gold }}>4.9</h4>
              </div>
              <p className="text-xs sm:text-sm font-semibold" style={{ color: colors.textMuted }}>
                Student Rating
              </p>
            </div>
          </motion.div>

          {/* Decorative Circles */}
          <div 
            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 rounded-full opacity-20 blur-3xl" 
            style={{ backgroundColor: colors.gold }} 
          />
          <div 
            className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-40 sm:h-40 rounded-full opacity-15 blur-3xl" 
            style={{ backgroundColor: colors.darkGold }} 
          />
        </motion.div>
      </div>
    </section>
  );
}