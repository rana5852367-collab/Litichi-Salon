"use client";

import { useState } from "react";
import { services } from "../data/services";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BookAppointment() {
  const colors = {
    background: "#FFFBF5",
    cardBg: "#FFFFFF",
    gold: "#C9A14A",
    darkGold: "#B8860B",
    text: "#1C1C1C",
    muted: "#6B6B6B",
    border: "#E8D5B7",
    lightGold: "#F4E4C1",
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
  });

  const selectedService = services.find(
    (s) => s.slug === form.service
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ WhatsApp Send Function
  const handleSubmit = () => {
    // Basic validation
    if (
      !form.name ||
      !form.phone ||
      !form.service ||
      !form.doctor ||
      !form.date ||
      !form.time
    ) {
      alert("Please fill all fields");
      return;
    }

    const message = `
Hello, I want to confirm my appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${selectedService?.title}
Expert: ${form.doctor}
Date: ${form.date}
Time: ${form.time}

Please confirm my booking. Thank you!
`;

    const whatsappNumber = "923458075375"; // 🔴 Replace with your WhatsApp number (Pakistan format without +)

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <Header />

      <div
        className="min-h-screen py-20 px-6 text-black mt-5"
        style={{ backgroundColor: colors.background }}
      >
        <div
          className="max-w-3xl mx-auto p-10 rounded-3xl shadow-xl border"
          style={{
            backgroundColor: colors.cardBg,
            borderColor: colors.border,
          }}
        >
          <h1
            className="text-4xl font-bold mb-10 text-center"
            style={{ color: colors.text }}
          >
            Book Your{" "}
            <span style={{ color: colors.gold }}>
              Appointment
            </span>
          </h1>

          <div className="space-y-6">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-4 rounded-xl border focus:outline-none"
              style={{ borderColor: colors.border }}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-4 rounded-xl border"
              style={{ borderColor: colors.border }}
            />

            <select
              name="service"
              onChange={handleChange}
              className="w-full p-4 rounded-xl border"
              style={{ borderColor: colors.border }}
            >
              <option value="">Select Service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title} - {service.price}
                </option>
              ))}
            </select>

            <select
              name="doctor"
              onChange={handleChange}
              className="w-full p-4 rounded-xl border"
              style={{ borderColor: colors.border }}
            >
              <option value="">Select Salon Expert</option>
              <option value="Dr. Ayesha">Dr. Ayesha</option>
              <option value="Dr. Sana">Dr. Sana</option>
              <option value="Dr. Maria">Dr. Maria</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full p-4 rounded-xl border"
                style={{ borderColor: colors.border }}
              />
              <input
                type="time"
                name="time"
                onChange={handleChange}
                className="w-full p-4 rounded-xl border"
                style={{ borderColor: colors.border }}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-full font-bold text-lg transition-all duration-300"
              style={{
                backgroundColor: colors.gold,
                color: "#fff",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = colors.darkGold)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = colors.gold)
              }
            >
              Confirm via WhatsApp
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}