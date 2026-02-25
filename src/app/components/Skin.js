"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Skin = () => {
  return (
    <section className="py-16 bg-white text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#C9A14A]">
          Experience Luxury at Our Salon
        </h2>


        {/* Paragraph */}
        <p className="text-black mb-10 text-lg md:text-xl leading-relaxed">
          Pamper yourself with our premium services designed to bring out your
          natural beauty. Our experts provide professional care in a relaxing
          and elegant environment.
        </p>


        {/* Send Message Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <Link href="/contact">

            <button className="bg-[#C9A14A] text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#E6C79C] transition duration-300 shadow-lg hover:shadow-[#C9A14A]/40">

              Send Us Message

            </button>

          </Link>

        </motion.div>


      </div>
    </section>
  );
};

export default Skin;  