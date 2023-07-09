/* eslint-disable react/no-unescaped-entities */
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import desk from "../../assets/desk.png";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <motion.div
          className="animationContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
    <div
      id="about"
      className="md:my-32 flex flex-col-reverse md:flex-row  justify-start items-center "
    >
      <div className="4/12"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-delay="500"
      data-aos-duration="1600"
      >
        <img src={desk} alt="" />
      </div>
      <div className="md:flex justify-between items-start md:w-8/12" 
      data-aos="flip-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-delay="500"
      data-aos-duration="1000"
      >
        <div className="md:w-10/12 space-y-5">
          <h1 className="text-5xl">ABOUT ME</h1>
          <h5 className="text-xl text-gray-200 md:w-10/12">
            Hello there! I'm <span className="">Fahad Ibne Hossain</span>, a
            passionate and dedicated MERN Stack Developer. I'm excited to embark
            on a journey in the world of web development. My goal is to
            contribute my skills and creativity to build dynamic and
            user-friendly web applications.
          </h5>
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-4 my-8">
              <Link
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-delay="1000"
                data-aos-duration="1500"
                to="https://drive.google.com/u/0/uc?id=1E0L77XRL8z3E1tDIZJ7DFRpEaBzCtlM4&export=download"
              >
                <motion.button
                whileHover={{ scale: 1.1, originX: 1,}}
                transition={{type: "spring", stiffness: 180}}
                className="bg-[#ffffff45] bg-opacity-25 hover:bg-gradient-to-tr from-[#2cc0ffe3] to-[#fbb1fcac] text-lg font-medium px-6 py-4 rounded-full flex justify-center items-center gap-2 shadow-2xl shadow-[#ff720698]">
                  Download My Resume <ArrowDownTrayIcon className="w-6" />
                </motion.button>
              </Link>
            </div>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterStart(true)}
          onExit={() => setCounterStart(false)}
        >
          <div className="flex justify-center md:justify-between items-start gap-6 my-8 md:my-0"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          data-aos-duration="800"
          >
            <h1 className="text-xl">
              <span className="text-5xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#0eaaee] to-[#f5aff6]">
                {counterStart && (
                  <CountUp start={0} end={6} duration={2} delay={1.5} />
                )}
                +{" "}
              </span>{" "}
              <br /> Months Learning Experience
            </h1>
            <h1 className="text-xl">
              <span className="text-5xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#0eaaee] to-[#f5aff6]">
                {counterStart && (
                  <CountUp start={0} end={13} duration={2} delay={2} />
                )}
                +
              </span>{" "}
              Projects
            </h1>
          </div>
        </ScrollTrigger>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutPage;
