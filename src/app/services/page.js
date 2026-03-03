"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Scissors, 
  Sparkles, 
  Palette, 
  Hand, 
  Footprints,
  Eye,
  Smile,
  Droplet,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Heart
} from "lucide-react";
import { megaMenuData } from "../data/megaMenuData";

export default function ServicesPage() {
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

  // Map mega menu categories to service page format
  const categoryIcons = {
    hair: Scissors,
    skin: Sparkles,
    makeup: Palette,
    nails: Hand,
    beauty: Droplet,
    spa: Heart,
  };

  const serviceCategories = [
    {
      category: "Hair Services",
      icon: Scissors,
      services: [
        {
          name: "Women's Haircut",
          description: "Professional haircut with wash, styling and finishing",
          price: "Rs. 1,500",
          duration: "60 mins",
          image: "/haircut.jpg",
          features: ["Consultation", "Wash & Dry", "Styling", "Finishing"],
        },
        {
          name: "Hair Coloring",
          description: "Full hair coloring with premium quality products",
          price: "Rs. 3,500",
          duration: "120 mins",
          image: "/color.jpg",
          features: ["Color Consultation", "Root Touch-up", "Toner", "Styling"],
        },
        {
          name: "Hair Spa Treatment",
          description: "Deep conditioning treatment for damaged hair",
          price: "Rs. 2,500",
          duration: "90 mins",
          image: "/color2.jpg",
          features: ["Deep Cleansing", "Massage", "Steam", "Mask Treatment"],
        },
      ],
    },
    {
      category: "Facial & Skin",
      icon: Sparkles,
      services: [
        {
          name: "Luxury Facial",
          description: "Premium facial with imported products for glowing skin",
          price: "Rs. 2,500",
          duration: "75 mins",
          image: "/facial.jpg",
          features: ["Cleansing", "Exfoliation", "Massage", "Mask"],
        },
        {
          name: "Gold Facial",
          description: "Special gold facial for radiant and youthful skin",
          price: "Rs. 4,500",
          duration: "90 mins",
          image: "/mackup1.jpg",
          features: ["24K Gold", "Anti-aging", "Brightening", "Hydration"],
        },
        {
          name: "Skin Whitening",
          description: "Advanced skin whitening treatment with natural products",
          price: "Rs. 3,000",
          duration: "60 mins",
          image: "/mackup2.jpg",
          features: ["Pigmentation Removal", "Even Tone", "Glow", "Protection"],
        },
      ],
    },
    {
      category: "Makeup Services",
      icon: Palette,
      services: [
        {
          name: "Bridal Makeup",
          description: "Complete bridal makeup with hair styling and accessories",
          price: "Rs. 15,000",
          duration: "180 mins",
          image: "/bridal1.jpg",
          features: ["HD Makeup", "Hair Styling", "Jewelry Setting", "Touch-ups"],
        },
        {
          name: "Party Makeup",
          description: "Glamorous party makeup for special occasions",
          price: "Rs. 5,000",
          duration: "90 mins",
          image: "/bridal2.jpg",
          features: ["Full Face Makeup", "Eye Makeup", "Lips", "Setting Spray"],
        },
        {
          name: "Engagement Makeup",
          description: "Elegant makeup for engagement ceremonies",
          price: "Rs. 8,000",
          duration: "120 mins",
          image: "/bridal1.jpg",
          features: ["Premium Products", "Hair Styling", "Draping", "Touch-up Kit"],
        },
      ],
    },
    {
      category: "Nail Services",
      icon: Hand,
      services: [
        {
          name: "Manicure",
          description: "Complete hand and nail care with polish",
          price: "Rs. 1,800",
          duration: "45 mins",
          image: "/nailart.jpg",
          features: ["Nail Shaping", "Cuticle Care", "Massage", "Polish"],
        },
        {
          name: "Pedicure",
          description: "Relaxing foot treatment with nail care",
          price: "Rs. 2,000",
          duration: "60 mins",
          image: "/pedicure.jpg",
          features: ["Foot Soak", "Scrub", "Massage", "Polish"],
        },
        {
          name: "Nail Art",
          description: "Creative nail art designs by expert artists",
          price: "Rs. 2,500",
          duration: "75 mins",
          image: "/nail.jpg",
          features: ["Custom Designs", "Gel Polish", "3D Art", "Long-lasting"],
        },
      ],
    },
  ];

  const benefits = [
    { icon: Star, text: "Premium Quality Products" },
    { icon: Clock, text: "Flexible Timing" },
    { icon: CheckCircle2, text: "Experienced Professionals" },
    { icon: Smile, text: "Hygienic Environment" },
  ];

  return (
    <div style={{ backgroundColor: colors.background }}>
      <Header />

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
              Premium Beauty Services
              <span style={{ color: colors.gold }}> For You</span>
            </h1>

            {/* Description */}
            <p 
              className="text-xl leading-relaxed mb-8"
              style={{ color: colors.textMuted }}
            >
              Discover our comprehensive range of beauty services designed to enhance 
              your natural beauty and boost your confidence.
            </p>
          </motion.div>

          {/* Benefits Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 p-4 rounded-xl"
                style={{ backgroundColor: colors.lightBeige }}
              >
                <benefit.icon size={20} style={{ color: colors.gold }} />
                <span 
                  className="text-sm font-semibold"
                  style={{ color: colors.text }}
                >
                  {benefit.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section 
          key={categoryIndex}
          className="py-20"
          style={{ 
            backgroundColor: categoryIndex % 2 === 0 ? colors.background : colors.lightBeige 
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: colors.lightGold }}
              >
                <category.icon size={40} style={{ color: colors.gold }} />
              </div>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: colors.text }}
              >
                {category.category}
              </h2>
              <div 
                className="w-24 h-1 rounded-full mx-auto"
                style={{ backgroundColor: colors.gold }}
              />
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500"
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
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(to top, ${colors.gold}dd, transparent)`,
                      }}
                    />

                    {/* Price Badge */}
                    <div 
                      className="absolute top-4 right-4 px-5 py-2 rounded-full font-bold shadow-lg"
                      style={{ 
                        backgroundColor: colors.gold,
                        color: colors.background,
                      }}
                    >
                      {service.price}
                    </div>

                    {/* Duration Badge */}
                    <div 
                      className="absolute top-4 left-4 px-4 py-2 rounded-full font-semibold backdrop-blur-sm flex items-center gap-2"
                      style={{ 
                        backgroundColor: `${colors.cardBg}dd`,
                        color: colors.text,
                      }}
                    >
                      <Clock size={16} style={{ color: colors.gold }} />
                      {service.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Name */}
                    <h3 
                      className="text-2xl font-bold mb-3"
                      style={{ color: colors.text }}
                    >
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p 
                      className="mb-6 leading-relaxed"
                      style={{ color: colors.textMuted }}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 
                        className="text-sm font-bold mb-3 uppercase tracking-wide"
                        style={{ color: colors.gold }}
                      >
                        Includes:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 
                              size={16} 
                              style={{ color: colors.gold }} 
                              className="flex-shrink-0"
                            />
                            <span 
                              className="text-sm"
                              style={{ color: colors.textMuted }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div 
                      className="w-full h-px mb-6"
                      style={{ backgroundColor: colors.lightGold }}
                    />

                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
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
                      Book Now
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

  

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl border-2 shadow-2xl"
            style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.gold,
            }}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colors.text }}
            >
              Ready to Book
              <span style={{ color: colors.gold }}> Your Service?</span>
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ color: colors.textMuted }}
            >
              Schedule your appointment today and experience luxury beauty care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: colors.gold,
                  color: colors.background,
                }}
              >
                Book Appointment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300"
                style={{ 
                  borderColor: colors.gold,
                  color: colors.gold,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.gold;
                  e.currentTarget.style.color = colors.background;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = colors.gold;
                }}
              >
                Call Us Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}