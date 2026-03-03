"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Academy() {

  const colors = {
    background: "#FFFBF5",
    gold: "#C9A14A",
    dark: "#2A2A2A",
    brown: "#3D352B",
    lightBeige: "#EFE3D3",
  };


  const courses = [
    {
      title: "Hair Styling",
      image: "/hair2.jpg",
      duration: "3 Months",
      students: "120+",
      description: "Learn modern hair cutting and styling.",
    },
    {
      title: "Makeup Course",
      image: "/mackup2.jpg",
      duration: "2 Months",
      students: "90+",
      description: "Become professional makeup artist.",
    },
    {
      title: "Skin Care",
      image: "/skin2.jpg",
      duration: "2 Months",
      students: "70+",
      description: "Professional facial and skin training.",
    },
    {
      title: "Nail Course",
      image: "/nail.jpg",
      duration: "1 Month",
      students: "60+",
      description: "Learn nail art and extensions.",
    },
  ];



  return (

    <>

      <Header />


      <main style={{ backgroundColor: colors.background }}>



        {/* HERO SECTION */}


        <section className="py-20">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            <div>

              <h1
                className="text-5xl font-bold mb-6"
                style={{ color: colors.dark }}
              >
                Professional Salon Academy
              </h1>

              <p
                className="mb-6"
                style={{ color: colors.brown }}
              >
                Start your journey in the beauty industry with our certified professional courses.
              </p>


              <button
                className="px-8 py-3 rounded"
                style={{
                  backgroundColor: colors.gold,
                  color: "white",
                }}
              >
                Join Academy
              </button>

            </div>


            <Image
              src="/student.jpg"
              width={600}
              height={400}
              alt=""
              className="rounded-xl"
            />

          </div>

        </section>



        {/* ABOUT SECTION */}



        <section className="py-20"
        style={{ backgroundColor: colors.lightBeige }}
        >

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mt-10f">


            <Image
              src="/student.jpg"
              width={600}
              height={400}
              alt=""
              className="rounded-xl"
            />



            <div>

              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: colors.dark }}
              >
                About Our Academy
              </h2>


              <p style={{ color: colors.brown }}>

                Our academy provides high quality beauty education with real salon experience.

                Learn from experts and become certified professional.

              </p>

            </div>

          </div>

        </section>



        {/* STATS */}



        <section className="py-20">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">


            <div>

              <h2
                className="text-4xl font-bold"
                style={{ color: colors.gold }}
              >
                500+
              </h2>

              <p style={{ color: colors.brown }}>
                Students
              </p>

            </div>


            <div>

              <h2
                className="text-4xl font-bold"
                style={{ color: colors.gold }}
              >
                10+
              </h2>

              <p style={{ color: colors.brown }}>
                Courses
              </p>

            </div>


            <div>

              <h2
                className="text-4xl font-bold"
                style={{ color: colors.gold }}
              >
                15+
              </h2>

              <p style={{ color: colors.brown }}>
                Trainers
              </p>

            </div>



            <div>

              <h2
                className="text-4xl font-bold"
                style={{ color: colors.gold }}
              >
                100%
              </h2>

              <p style={{ color: colors.brown }}>
                Certification
              </p>

            </div>


          </div>

        </section>





        {/* COURSES */}




        <section className="py-20">


          <div className="max-w-7xl mx-auto px-6">


            <h2
              className="text-4xl font-bold text-center mb-10"
              style={{ color: colors.dark }}
            >
              Our Courses
            </h2>


            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">


              {courses.map((course, index) => (

                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="shadow-lg rounded-xl overflow-hidden"
                  style={{ backgroundColor: colors.lightBeige }}
                >


                  <Image
                    src={course.image}
                    width={400}
                    height={250}
                    alt=""
                  />


                  <div className="p-5">


                    <h3
                      className="text-xl font-bold"
                      style={{ color: colors.dark }}
                    >
                      {course.title}
                    </h3>



                    <p style={{ color: colors.brown }}>
                      {course.description}
                    </p>


                    <div className="flex justify-between mt-3">


                      <span style={{ color: colors.gold }}>
                        {course.duration}
                      </span>



                      <span style={{ color: colors.gold }}>
                        {course.students}
                      </span>



                    </div>



                    <button
                      className="w-full mt-4 py-2 rounded"
                      style={{
                        backgroundColor: colors.gold,
                        color: "white",
                      }}
                    >
                      Enroll Now
                    </button>



                  </div>

                </motion.div>

              ))}


            </div>

          </div>

        </section>




        {/* CTA */}



        <section
        className="py-20 text-center"
        style={{ backgroundColor: colors.dark }}
        >


          <h2
          className="text-4xl font-bold mb-4"
          style={{ color: "white" }}
          >
            Start Your Career Today
          </h2>



          <p
          className="mb-6"
          style={{ color: "#ccc" }}
          >
            Join our academy and become professional
          </p>



          <button
          className="px-8 py-3 rounded"
          style={{
            backgroundColor: colors.gold,
            color: "white",
          }}
          >
            Apply Now
          </button>



        </section>



      </main>


      <Footer />


    </>

  );

}