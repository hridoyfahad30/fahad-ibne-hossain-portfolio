/* eslint-disable react/no-unescaped-entities */
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import hero from "../../assets/fahad.png";
import { motion } from "framer-motion";
import TopNav from "../TopNav/TopNav";

const HeroProfile = () => {
  return (
    <motion.div
      className="animationContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div id="profile" className="my-36 md:my-44 lg:my-12">
        <TopNav />
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-1/2">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium flex items-center gap-2">
              I'm a{" "}
              <span className="text-lg md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#7dd2f6] to-[#f0b3f1]">
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "Full Stack Developer",
                      "Web Developer",
                      "Javascript Developer",
                      "React Developer",
                      "Front-End Developer",
                      "Back-End Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 15,
                    delay: 30,
                  }}
                />
              </span>
            </h2>
            <p className="my-6 text-sm md:text-xl text-gray-200 md:w-9/12">
              I'm a Passionate Frontend Developer with strong teamwork skills.
              Committed to delivering high-quality code and creating innovative
              solutions. Dedicated to continuous learning and staying up-to-date
              with the latest technologies and trends in development.
            </p>
            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-4 my-8">
              <Link to="https://drive.google.com/u/0/uc?id=1gP3KBw74bJlYrzGCwrvbP3IydnGHiqdd&export=download">
                <motion.button
                  whileHover={{ scale: 1.1, originX: 1 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className="bg-[#ffffff45] bg-opacity-25 hover:bg-gradient-to-tr from-[#2cc0ffe3] to-[#fbb1fcac] text-lg font-medium px-6 py-4 rounded-full flex justify-center items-center gap-2 shadow-2xl shadow-[#ff720698]"
                >
                  Download My Resume <ArrowDownTrayIcon className="w-6" />
                </motion.button>
              </Link>
            </div>
            <div className="space-x-4 text-4xl text-gray-400 flex justify-center md:justify-start">
              <Link to="https://github.com/hridoyfahad30" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.1, originX: 1 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <FaGithub className="hover:text-white" />
                </motion.button>
              </Link>
              <Link to="https://www.linkedin.com/in/fahad-ibne-hossain-1489411b0/">
                <motion.button
                  whileHover={{ scale: 1.1, originX: 1 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <FaLinkedin className="hover:text-[#0b53fc]" />
                </motion.button>
              </Link>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.1, originX: 1 }}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <FaEnvelope className="hover:text-red-600" />
                </motion.button>
              </Link>
            </div>
          </div>

          <motion.span
            whileHover={{ scale: 1.05, originX: 0.5 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="my-12 md:my-0">
              <img
                className="shadow-2xl shadow-[#592525] rounded-3xl w-96 mx-auto"
                src={hero}
                alt=""
              />
            </div>
          </motion.span>
        </div>
        <div className="text-fuchsia-400 my-36 md:my-6 md:mr-36">
          <h3 className="text-xl flex flex-col-reverse justify-center items-center gap-6">
            <FaArrowDown className="animate-bounce " /> Scroll Down
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProfile;
