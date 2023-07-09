import {
  CogIcon,
  CommandLineIcon,
  PaperAirplaneIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { FaAddressCard, FaUserAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import "./SideNav.css";
import { motion } from "framer-motion";

const SideNav = () => {
  return (
    <motion.div
      className="skillsCardContainer z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <nav
        className="md:w-1/12 md:my-10 md:ml-12 z-50"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        <div className="fixed md:w-28 flex md:flex-col items-end md:items-center justify-between gap-4 mx-auto md:gap-6 bg-[#ff6c2c1c] bg-opacity-5 backdrop-blur-3xl py-2 md:py-14 px-6 rounded-2xl shadow-2xl shadow-[#ff500b2d] text-white md:text-lg">
          <Link
            to="profile"
            spy={true}
            smooth={true}
            offset={-150}
            duration={2000}
            className="active:translate-x-2"
          >
            <motion.button
              whileHover={{ scale: 1.1, originX: -1.01 }}
              transition={{ type: "spring", stiffness: 250 }}
              className=""
            >
              <p className="navItems flex flex-col items-center gap-2 text-center text-white mb-2 duration-200">
                <FaUserAlt className="text-4xl" />
                Profile
              </p>
            </motion.button>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={2000}
          >
            <motion.button
              whileHover={{ scale: 1.1, originX: -1.01 }}
              transition={{ type: "spring", stiffness: 250 }}
              className=""
            >
              <p className="navItems flex flex-col gap-2 items-center text-white mb-2  ">
                <FaAddressCard className="text-4xl" />
                About
              </p>
            </motion.button>
          </Link>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-130}
            duration={2000}
          >
            <motion.button
              whileHover={{ scale: 1.1, originX: -1.01 }}
              transition={{ type: "spring", stiffness: 250 }}
              className=""
            >
              <p className="navItems flex flex-col gap-2 text-center text-white mb-2 ">
                <CogIcon className="h-10" />
                Service
              </p>
            </motion.button>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
          >
            <motion.button
              whileHover={{ scale: 1.1, originX: -1.01 }}
              transition={{ type: "spring", stiffness: 250 }}
              className=""
            >
              <p className="navItems flex flex-col gap-2 text-center text-white mb-2 ">
                <CommandLineIcon className="h-10" />
                Skills
              </p>
            </motion.button>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <motion.button
              whileHover={{ scale: 1.1, originX: -1.01 }}
              transition={{ type: "spring", stiffness: 250 }}
              className=""
            >
              <p className="navItems flex flex-col gap-2 text-center text-white mb-2 ">
                <RocketLaunchIcon className="h-10" />
                Projects
              </p>
            </motion.button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={2000}
          >
            <motion.button
              whileHover={{ scale: 1.1, originX: -1.01 }}
              transition={{ type: "spring", stiffness: 250 }}
              className=""
            >
              <p className="navItems flex flex-col gap-2 text-center text-white mb-2 ">
                <PaperAirplaneIcon className="h-10 -rotate-45" />
                Contact
              </p>
            </motion.button>
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

export default SideNav;
