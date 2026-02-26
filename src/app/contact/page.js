"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Calendar,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Litchi Beauty Salon", "Main Road, Bahawalnagar", "Punjab, Pakistan"],
      link: "#map",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 300 1234567", "+92 301 7654321"],
      link: "tel:+923001234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@litchi.com", "booking@litchi.com"],
      link: "mailto:info@litchi.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
      link: null,
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com",
      color: "#1877F2",
      followers: "12.5K",
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://instagram.com",
      color: "#E4405F",
      followers: "25.8K",
    },
    {
      icon: Twitter,
      name: "Twitter",
      link: "https://twitter.com",
      color: "#1DA1F2",
      followers: "8.2K",
    },
    {
      icon: Youtube,
      name: "YouTube",
      link: "https://youtube.com",
      color: "#FF0000",
      followers: "15.3K",
    },
   
  ];

  const services = [
    "Hair Styling",
    "Facial Treatment",
    "Bridal Makeup",
    "Manicure & Pedicure",
    "Hair Coloring",
    "Skin Care",
    "Other Services",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });
      }, 3000);
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: colors.background }}>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
             
            </motion.div>

            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: colors.text }}
            >
              Contact 
              <span style={{ color: colors.gold }}> Our Team</span>
            </h1>

            <p 
              className="text-xl leading-relaxed"
              style={{ color: colors.textMuted }}
            >
              Have questions? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300"
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
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: colors.lightGold }}
                >
                  <info.icon size={32} style={{ color: colors.gold }} />
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.text }}
                >
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p 
                    key={idx}
                    className="text-sm mb-1"
                    style={{ color: colors.textMuted }}
                  >
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section 
        className="py-16"
        style={{ backgroundColor: colors.lightBeige }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-3xl p-8 md:p-10 border-2 shadow-xl"
                style={{ 
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                }}
              >
                <h2 
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors.text }}
                >
                  Send us a Message
                </h2>
                <p 
                  className="mb-8"
                  style={{ color: colors.textMuted }}
                >
                  Fill out the form below and we'll get back to you shortly
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center py-12"
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: colors.lightGold }}
                    >
                      <CheckCircle size={48} style={{ color: colors.gold }} />
                    </div>
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: colors.text }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: colors.textMuted }}>
                      We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-6">
                      <label 
                        className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wider"
                        style={{ color: colors.text }}
                      >
                        <User size={16} style={{ color: colors.gold }} />
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all duration-300"
                        style={{ 
                          borderColor: colors.border,
                          backgroundColor: colors.background,
                          color: colors.text,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = colors.gold;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = colors.border;
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                      <label 
                        className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wider"
                        style={{ color: colors.text }}
                      >
                        <Mail size={16} style={{ color: colors.gold }} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all duration-300"
                        style={{ 
                          borderColor: colors.border,
                          backgroundColor: colors.background,
                          color: colors.text,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = colors.gold;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = colors.border;
                        }}
                      />
                    </div>

                    {/* Phone */}
                    <div className="mb-6">
                      <label 
                        className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wider"
                        style={{ color: colors.text }}
                      >
                        <Phone size={16} style={{ color: colors.gold }} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+92 300 1234567"
                        className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all duration-300"
                        style={{ 
                          borderColor: colors.border,
                          backgroundColor: colors.background,
                          color: colors.text,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = colors.gold;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = colors.border;
                        }}
                      />
                    </div>

                    {/* Service */}
                    <div className="mb-6">
                      <label 
                        className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wider"
                        style={{ color: colors.text }}
                      >
                        <Calendar size={16} style={{ color: colors.gold }} />
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all duration-300"
                        style={{ 
                          borderColor: colors.border,
                          backgroundColor: colors.background,
                          color: colors.text,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = colors.gold;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = colors.border;
                        }}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="mb-6">
                      <label 
                        className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wider"
                        style={{ color: colors.text }}
                      >
                        <Calendar size={16} style={{ color: colors.gold }} />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all duration-300"
                        style={{ 
                          borderColor: colors.border,
                          backgroundColor: colors.background,
                          color: colors.text,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = colors.gold;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = colors.border;
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                      <label 
                        className="flex items-center gap-2 font-semibold mb-3 text-sm uppercase tracking-wider"
                        style={{ color: colors.text }}
                      >
                        <MessageSquare size={16} style={{ color: colors.gold }} />
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Tell us more about your requirements..."
                        className="w-full px-5 py-4 rounded-xl border-2 outline-none resize-none transition-all duration-300"
                        style={{ 
                          borderColor: colors.border,
                          backgroundColor: colors.background,
                          color: colors.text,
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = colors.gold;
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = colors.border;
                        }}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ 
                        backgroundColor: colors.gold,
                        color: colors.background,
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map + Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div 
                id="map"
                className="rounded-3xl overflow-hidden border-2 shadow-xl h-96"
                style={{ borderColor: colors.border }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0389469846947!2d73.25213931508064!3d29.997407081940587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922d7f5c5555555%3A0x5555555555555555!2sBahawalnagar%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon Location"
                ></iframe>
              </div>

              {/* Social Media */}
              <div 
                className="rounded-3xl p-8 border-2 shadow-xl"
                style={{ 
                  backgroundColor: colors.cardBg,
                  borderColor: colors.border,
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.text }}
                >
                  Connect With Us
                </h3>
                
                <div className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center justify-between p-4 rounded-xl transition-all duration-300"
                      style={{ backgroundColor: colors.lightBeige }}
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${social.color}20` }}
                        >
                          <social.icon size={24} style={{ color: social.color }} />
                        </div>
                        <div>
                          <p 
                            className="font-bold"
                            style={{ color: colors.text }}
                          >
                            {social.name}
                          </p>
                          <p 
                            className="text-sm"
                            style={{ color: colors.textMuted }}
                          >
                            {social.followers} Followers
                          </p>
                        </div>
                      </div>
                      <div 
                        className="px-4 py-2 rounded-full font-semibold text-sm"
                        style={{ 
                          backgroundColor: social.color,
                          color: colors.background,
                        }}
                      >
                        Follow
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}