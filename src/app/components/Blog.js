"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export default function Blog() {

  const colors = {
    background: "#FFFBF5",
    cardBg: "#FFFFFF",
    gold: "#C9A14A",
    darkGold: "#B8860B",
    lightGold: "#F4E4C1",
    text: "#2A2A2A",
    textMuted: "#6B6B6B",
    border: "#E8D5B7",
  };

  const blogPosts = [

    {
      id: 1,
      title: "Bridal Makeup Transformation",
      excerpt: "See this amazing bridal transformation.",
      beforeImage: "/before1.jpg",
      afterImage: "/after1.jpg",
      category: "Makeup",
      readTime: "5 min",
    },

    {
      id: 2,
      title: "Hair Color Transformation",
      excerpt: "Professional hair coloring results.",
      beforeImage: "/before2.jpg",
      afterImage: "/after2.jpg",
      date: "March 12, 2024",
      readTime: "8 min",
    },

    {
      id: 3,
      title: "Skin Treatment Results",
      excerpt: "Clear glowing skin transformation.",
      beforeImage: "/before3.jpg",
      afterImage: "/after3.jpg",
      date: "March 10, 2024",
      readTime: "6 min",
    },

    {
      id: 4,
      title: "Luxury Facial Transformation",
      excerpt: "Premium facial treatment results.",
      beforeImage: "/before4.jpg",
      afterImage: "/after4.jpg",
      category: "Facial",
      date: "March 8, 2024",
      readTime: "7 min",
    },

  ];


  return (

    <section
      className="py-20 px-6"
      style={{ backgroundColor: colors.background }}
    >

      <div className="max-w-7xl mx-auto">


        {/* Header */}

        <div className="text-center mb-14">

          <span
            className="px-4 py-2 rounded-full text-sm font-bold uppercase"
            style={{
              backgroundColor: colors.lightGold,
              color: colors.gold,
            }}
          >
            Our Blog
          </span>


          <h2
            className="text-4xl md:text-5xl font-bold mt-4"
            style={{ color: colors.text }}
          >
            Before & After
            <span style={{ color: colors.gold }}> Transformations</span>
          </h2>

        </div>



        {/* Grid Layout */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">


          {blogPosts.map((post, index) => (


            <motion.article

              key={post.id}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ delay: index * 0.1 }}

              whileHover={{ y: -10 }}

              className="group rounded-2xl overflow-hidden border shadow-md hover:shadow-2xl transition-all duration-500"

              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.border,
              }}

            >



              {/* Before After Image */}

              <div className="relative h-56 xl:h-60 overflow-hidden">


                {/* Before */}

                <Image
                  src={post.beforeImage}
                  alt="before"
                  width={400}
                  height={300}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 group-hover:scale-110 transition duration-700"
                />


                {/* After */}

                <Image
                  src={post.afterImage}
                  alt="after"
                  width={400}
                  height={300}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
                />


                {/* Labels */}

                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs">

                  Before

                </div>


                <div className="absolute bottom-4 right-4 bg-[#C9A14A] text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition">

                  After

                </div>



                {/* Category */}

                <div

                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"

                  style={{
                    backgroundColor: colors.gold,
                    color: "#fff",
                  }}

                >

                  {post.category}

                </div>


              </div>



              {/* Content */}

              <div className="p-5">


                <div className="flex gap-3 text-xs mb-2" style={{ color: colors.textMuted }}>

                  <div className="flex items-center gap-1">

                    <Calendar size={13} />

                    {post.date}

                  </div>


                  <div className="flex items-center gap-1">

                    <Clock size={13} />

                    {post.readTime}

                  </div>


                </div>



                <h3

                  className="font-bold text-lg mb-2"

                  style={{ color: colors.text }}

                >

                  {post.title}

                </h3>



                <p

                  className="text-sm mb-3"

                  style={{ color: colors.textMuted }}

                >

                  {post.excerpt}

                </p>



                <div className="flex justify-between items-center">


                  <div className="flex items-center gap-1 text-xs">

                    <User size={13} />

                    {post.author}

                  </div>



                  <button

                    className="flex items-center gap-1 text-sm font-semibold"

                    style={{ color: colors.gold }}

                  >

                    View

                    <ArrowRight size={15} />

                  </button>


                </div>


              </div>


            </motion.article>


          ))}


        </div>


      </div>


    </section>

  );

}