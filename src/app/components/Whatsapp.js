"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {

  const phoneNumber = "9231234567764"; // your WhatsApp number with country code

  const message = "Hello, I want to book an appointment.";

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >

      <div className="bg-[#C9A14A] hover:bg-[#C9A14A] p-4 rounded-full shadow-lg transition duration-300 animate-bounce">

        <FaWhatsapp size={28} className="text-white" />

      </div>

    </a>
  );
}