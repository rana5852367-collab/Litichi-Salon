"use client";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Heart, TrendingUp, Clock, Star, Sparkles, Target } from "lucide-react";

export default function AboutPage() {
  // Day Mode Color Palette
  const colors = {
    background: "#FFFBF5",
    cardBg: "#FFFFFF",
    gold: "#C9A14A",
    darkGold: "#B8860B",
    lightGold: "#F4E4C1",
    text: "#2A2A2A",
    textMuted: "#6B6B6B",
    lightBeige: "#FFF8F0",
    border: "#E8D5B7",
  };

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and comfort are our top priorities in everything we do.",
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We maintain the highest standards in service quality and professionalism.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay updated with latest trends and techniques in beauty industry.",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We believe in honest, transparent relationships with our clients.",
    },
  ];

  const team = [
    {
      name: "Sarah Ahmed",
      role: "Founder & Lead Stylist",
      image: "/team1.jpg",
      specialty: "Hair & Makeup Expert",
    },
    {
      name: "Ayesha Khan",
      role: "Senior Beautician",
      image: "/team2.jpg",
      specialty: "Skin Care Specialist",
    },
    {
      name: "Maria Ali",
      role: "Makeup Artist",
      image: "/team3.jpg",
      specialty: "Bridal Makeup",
    },
    {
      name: "Zara Hassan",
      role: "Nail Technician",
      image: "/team4.jpg",
      specialty: "Nail Art Expert",
    },
  ];

  const timeline = [
    { year: "2014", title: "The Beginning", description: "Started with a small salon in Bahawalnagar" },
    { year: "2017", title: "Expansion", description: "Opened second branch and added academy" },
    { year: "2020", title: "Recognition", description: "Won Best Salon Award in region" },
    { year: "2024", title: "Today", description: "Leading beauty destination with 10,000+ clients" },
  ];

  return (
    <>
      <Header />
    <div style={{ backgroundColor: colors.background }}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, ${colors.gold} 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
            
            </motion.div>

            {/* Heading */}
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: colors.text }}
            >
              Where Beauty Meets
              <span style={{ color: colors.gold }}> Excellence</span>
            </h1>

            {/* Description */}
            <p 
              className="text-xl leading-relaxed mb-8"
              style={{ color: colors.textMuted }}
            >
              For over a decade, we've been transforming beauty dreams into reality 
              with our premium services and passionate team of experts.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: colors.gold,
                color: colors.background,
              }}
            >
          <a href="/bookopointment" className="text-background no-underline">Book Your Appointment </a>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl border-2 shadow-lg"
                style={{ 
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: colors.lightGold }}
                >
                  <stat.icon size={32} style={{ color: colors.gold }} />
                </div>
                <h3 
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.gold }}
                >
                  {stat.value}
                </h3>
                <p style={{ color: colors.textMuted }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
             

              {/* Decorative Element */}
              <div 
                className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: colors.gold }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6 "
                style={{ color: colors.text }}
              >
                Our <span style={{ color: colors.gold }}>Story</span>
              </h2>

              <p 
                className="text-lg leading-relaxed mb-4"
                style={{ color: colors.textMuted }}
              >
                Founded in 2014, Litchi Beauty Salon started as a small dream in the heart 
                of Bahawalnagar. Our founder, Sarah Ahmed, envisioned a place where every 
                woman could feel pampered, confident, and beautiful.
              </p>

              <p 
                className="text-lg leading-relaxed mb-4"
                style={{ color: colors.textMuted }}
              >
                What began with just three team members has now grown into a premier beauty 
                destination with over 10,000 satisfied clients. We've expanded our services, 
                opened an academy, and won numerous awards.
              </p>

              <p 
                className="text-lg leading-relaxed mb-8"
                style={{ color: colors.textMuted }}
              >
                But through it all, our commitment remains unchanged: to provide exceptional 
                beauty services with genuine care and professionalism.
              </p>

              <div 
                className="flex items-center gap-4 p-6 rounded-xl"
                style={{ backgroundColor: colors.lightBeige }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ 
                    backgroundColor: colors.gold,
                    color: colors.background,
                  }}
                >
                  10+
                </div>
                <div>
                  <h4 
                    className="font-bold text-lg mb-1"
                    style={{ color: colors.text }}
                  >
                    Years of Excellence
                  </h4>
                  <p style={{ color: colors.textMuted }}>
                    Serving beauty and confidence since 2014
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section 
        className="py-20"
        style={{ backgroundColor: colors.lightBeige }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              Our <span style={{ color: colors.gold }}>Values</span>
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ color: colors.textMuted }}
            >
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-2xl border-2 shadow-lg"
                style={{ 
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: colors.lightGold }}
                >
                  <value.icon size={36} style={{ color: colors.gold }} />
                </div>
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ color: colors.text }}
                >
                  {value.title}
                </h3>
                <p style={{ color: colors.textMuted }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              Our <span style={{ color: colors.gold }}>Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-1 hidden md:block transform -translate-x-1/2"
              style={{ backgroundColor: colors.border }}
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 md:text-right" style={index % 2 !== 0 ? { textAlign: "left" } : {}}>
                    <div 
                      className="inline-block p-6 rounded-2xl border-2 shadow-lg max-w-md"
                      style={{ 
                        backgroundColor: colors.cardBg,
                        borderColor: colors.gold,
                      }}
                    >
                      <span 
                        className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
                        style={{ 
                          backgroundColor: colors.lightGold,
                          color: colors.gold,
                        }}
                      >
                        {item.year}
                      </span>
                      <h3 
                        className="text-2xl font-bold mb-2"
                        style={{ color: colors.text }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: colors.textMuted }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div 
                    className="hidden md:block w-6 h-6 rounded-full border-4 z-10"
                    style={{ 
                      backgroundColor: colors.gold,
                      borderColor: colors.background,
                    }}
                  />

                  {/* Empty Space */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
        {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl border-2 shadow-2xl"
            style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.gold,
            }}
          >   
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colors.text }}
            >
              Ready to Experience
              <span style={{ color: colors.gold }}> the Difference?</span>
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ color: colors.textMuted }}
            >
              Join thousands of satisfied clients who trust us with their beauty needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: colors.gold,
                color: colors.background,
              }}
            >
              <a href="/bookopointment" className="text-background no-underline">Book Your Appointment now</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    /  </>
  );
}