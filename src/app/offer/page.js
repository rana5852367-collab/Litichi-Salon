"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Tag,
  Percent,
  Gift,
  Calendar,
  Clock,
  Star,
  Sparkles,
  Crown,
  Heart,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Users,
  Zap
} from "lucide-react";

export default function offer() {
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
    green: "#10B981",
    red: "#EF4444",
    blue: "#3B82F6",
  };

  const offers = [
    {
      id: 1,
      title: "Bridal Special Package",
      subtitle: "Complete Bridal Makeover",
      description: "Get our complete bridal package including makeup, hair styling, manicure, pedicure, and facial treatment at an amazing discount.",
      originalPrice: "Rs. 45,000",
      discountedPrice: "Rs. 32,000",
      discount: "29% OFF",
      image: "/offer-bridal.jpg",
      features: [
        "HD Bridal Makeup",
        "Professional Hair Styling",
        "Manicure & Pedicure",
        "Luxury Facial",
        "Free Touch-up Kit",
        "Jewelry Setting"
      ],
      validUntil: "March 31, 2024",
      popular: true,
      badge: "BEST SELLER",
      color: colors.gold,
    },
    {
      id: 2,
      title: "Monthly Beauty Package",
      subtitle: "Regular Beauty Maintenance",
      description: "Perfect for regular beauty maintenance. Includes unlimited basic services and special discounts on premium treatments.",
      originalPrice: "Rs. 20,000",
      discountedPrice: "Rs. 14,999",
      discount: "25% OFF",
      image: "/offer-monthly.jpg",
      features: [
        "3 Facials per Month",
        "2 Manicures",
        "2 Pedicures",
        "1 Hair Spa",
        "20% Off on All Services",
        "Priority Booking"
      ],
      validUntil: "Limited Time",
      popular: false,
      badge: "SAVE MORE",
      color: colors.blue,
    },
    {
      id: 3,
      title: "Party Glam Package",
      subtitle: "Look Stunning at Any Event",
      description: "Get party-ready with our exclusive package featuring professional makeup and styling services.",
      originalPrice: "Rs. 15,000",
      discountedPrice: "Rs. 10,500",
      discount: "30% OFF",
      image: "/offer-party.jpg",
      features: [
        "Party Makeup",
        "Hair Styling",
        "Manicure",
        "Free Accessories",
        "Complimentary Draping"
      ],
      validUntil: "March 25, 2024",
      popular: false,
      badge: "HOT DEAL",
      color: colors.red,
    },
    {
      id: 4,
      title: "Student Special",
      subtitle: "Exclusive Discount for Students",
      description: "Students get special discounts on all beauty services. Show your student ID and save big on your favorite treatments.",
      originalPrice: "Regular Price",
      discountedPrice: "20% OFF",
      discount: "STUDENT DISCOUNT",
      image: "/offer-student.jpg",
      features: [
        "Valid on All Services",
        "Additional Offers on Packages",
        "Weekend Bookings Available",
        "No Expiry Date",
        "Valid Student ID Required"
      ],
      validUntil: "Ongoing",
      popular: false,
      badge: "STUDENTS",
      color: colors.green,
    },
    {
      id: 5,
      title: "Hair Color Special",
      subtitle: "Transform Your Look",
      description: "Get premium hair coloring services with complimentary hair treatment and styling at unbeatable prices.",
      originalPrice: "Rs. 8,000",
      discountedPrice: "Rs. 5,500",
      discount: "31% OFF",
      image: "/offer-haircolor.jpg",
      features: [
        "Premium Quality Color",
        "Free Hair Treatment",
        "Professional Styling",
        "Color Consultation",
        "Touch-up Discount"
      ],
      validUntil: "April 10, 2024",
      popular: true,
      badge: "TRENDING",
      color: colors.gold,
    },
    {
      id: 6,
      title: "Refer & Earn",
      subtitle: "Get Rewards for Referrals",
      description: "Refer your friends and family to our salon and earn exciting rewards and discounts on your next visit.",
      originalPrice: "Free Services",
      discountedPrice: "Up to Rs. 5,000",
      discount: "REWARDS",
      image: "/offer-refer.jpg",
      features: [
        "Rs. 1,000 per Referral",
        "No Limit on Referrals",
        "Instant Credit",
        "Use on Any Service",
        "Friend Gets 15% Off"
      ],
      validUntil: "Ongoing",
      popular: false,
      badge: "EARN REWARDS",
      color: colors.blue,
    },
  ];

  const benefits = [
    { icon: Star, text: "Premium Quality Products", color: colors.gold },
    { icon: Users, text: "Experienced Professionals", color: colors.blue },
    { icon: Zap, text: "Quick Service", color: colors.red },
    { icon: Heart, text: "Customer Satisfaction", color: colors.green },
  ];

  return (
    <div style={{ backgroundColor: colors.background }}>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: colors.gold }}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -bottom-1/4 -right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: colors.blue }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            

            {/* Heading */}
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: colors.text }}
            >
              Exclusive Deals & 
              <span style={{ color: colors.gold }}> Amazing Savings</span>
            </h1>

            {/* Description */}
            <p 
              className="text-xl leading-relaxed mb-8"
              style={{ color: colors.textMuted }}
            >
              Take advantage of our limited-time offers and enjoy premium beauty 
              services at unbeatable prices.
            </p>

            {/* Benefits Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl"
                  style={{ backgroundColor: colors.lightBeige }}
                >
                  <benefit.icon size={24} style={{ color: benefit.color }} />
                  <span 
                    className="text-sm font-semibold text-center"
                    style={{ color: colors.text }}
                  >
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden border-2 shadow-xl hover:shadow-2xl transition-all duration-500"
                style={{ 
                  backgroundColor: colors.cardBg,
                  borderColor: offer.popular ? colors.gold : colors.border,
                }}
              >
                {/* Popular Badge */}
                {offer.popular && (
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="absolute top-6 -left-2 z-20"
                  >
                    <div 
                      className="px-6 py-2 rounded-r-full font-bold text-sm flex items-center gap-2 shadow-lg"
                      style={{ 
                        backgroundColor: colors.gold,
                        color: colors.background,
                      }}
                    >
                      <Crown size={16} />
                      {offer.badge}
                    </div>
                  </motion.div>
                )}

                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${colors.text}dd, transparent)`,
                    }}
                  />

                  {/* Discount Badge */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="absolute top-4 right-4 w-20 h-20 rounded-full flex items-center justify-center font-bold text-center shadow-xl"
                    style={{ 
                      backgroundColor: offer.color,
                      color: colors.background,
                    }}
                  >
                    <div>
                      <div className="text-xs">SAVE</div>
                      <div className="text-sm">{offer.discount}</div>
                    </div>
                  </motion.div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 
                      className="text-2xl font-bold mb-1"
                      style={{ color: colors.background }}
                    >
                      {offer.title}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: colors.background, opacity: 0.9 }}
                    >
                      {offer.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Description */}
                  <p 
                    className="mb-6 leading-relaxed"
                    style={{ color: colors.textMuted }}
                  >
                    {offer.description}
                  </p>

                  {/* Price Section */}
                  <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: colors.lightBeige }}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p 
                          className="text-sm line-through"
                          style={{ color: colors.textMuted }}
                        >
                          {offer.originalPrice}
                        </p>
                        <p 
                          className="text-3xl font-bold"
                          style={{ color: offer.color }}
                        >
                          {offer.discountedPrice}
                        </p>
                      </div>
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${offer.color}20` }}
                      >
                        <Percent size={28} style={{ color: offer.color }} />
                      </div>
                    </div>
                    
                    {/* Valid Until */}
                    <div className="flex items-center gap-2 text-sm" style={{ color: colors.textMuted }}>
                      <Calendar size={14} />
                      <span>Valid until: {offer.validUntil}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 
                      className="text-sm font-bold mb-3 uppercase tracking-wide flex items-center gap-2"
                      style={{ color: colors.gold }}
                    >
                      <Sparkles size={16} />
                      What's Included:
                    </h4>
                    <div className="space-y-2">
                      {offer.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 
                            size={18} 
                            style={{ color: colors.green }}
                            className="flex-shrink-0"
                          />
                          <span 
                            className="text-sm"
                            style={{ color: colors.text }}
                          >
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div 
                    className="w-full h-px mb-6"
                    style={{ backgroundColor: colors.border }}
                  />

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    style={{ 
                      backgroundColor: offer.color,
                      color: colors.background,
                    }}
                  >
                    <span className="relative z-10">Claim This Offer</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Shine Effect */}
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
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-5 rounded-tl-full"
                  style={{ backgroundColor: offer.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section 
        className="py-16"
        style={{ backgroundColor: colors.lightBeige }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              Terms & Conditions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 border-2"
            style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.border,
            }}
          >
            <ul className="space-y-3" style={{ color: colors.textMuted }}>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} style={{ color: colors.gold }} className="flex-shrink-0 mt-0.5" />
                <span>All offers are subject to availability and prior appointment booking.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} style={{ color: colors.gold }} className="flex-shrink-0 mt-0.5" />
                <span>Discounts cannot be combined with other ongoing promotions or offers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} style={{ color: colors.gold }} className="flex-shrink-0 mt-0.5" />
                <span>Packages are non-refundable and non-transferable once purchased.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} style={{ color: colors.gold }} className="flex-shrink-0 mt-0.5" />
                <span>Valid ID proof required for student discounts and referral programs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} style={{ color: colors.gold }} className="flex-shrink-0 mt-0.5" />
                <span>Management reserves the right to modify or cancel offers without prior notice.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-12 text-center"
            style={{ 
              background: `linear-gradient(135deg, ${colors.gold}, ${colors.darkGold})`,
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.background }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.background }} />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Gift size={64} style={{ color: colors.background }} className="mx-auto mb-6" />
              </motion.div>

              <h2 
                className="text-4xl font-bold mb-4"
                style={{ color: colors.background }}
              >
                Don't Miss Out!
              </h2>
              <p 
                className="text-xl mb-8"
                style={{ color: colors.background, opacity: 0.95 }}
              >
                Book your appointment today and enjoy these exclusive offers
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: colors.background,
                    color: colors.gold,
                  }}
                >
                  Book Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300"
                  style={{ 
                    borderColor: colors.background,
                    color: colors.background,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.background;
                    e.currentTarget.style.color = colors.gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.background;
                  }}
                >
                  Call Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}