import {CogIcon, CommandLineIcon, PaperAirplaneIcon, RocketLaunchIcon,} from "@heroicons/react/24/solid";
import {FaAddressCard, FaUserAlt} from "react-icons/fa";
import {Link} from "react-scroll";
import "./SideNav.css";
import {motion} from "framer-motion";

const SideNav = () => {
    return (
        <motion.div
            className="skillsCardContainer z-50"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 0.5}}
        >
            <nav
                className="md:w-1/12 mb-4 lg:my-10 lg:ml-12 z-50 mx-auto"
            >
                <div
                    className="fixed w-full lg:w-28 flex lg:flex-col items-end md:items-center justify-start gap-3 md:gap-6 bg-[#ff6c2c1c] bg-opacity-10 backdrop-blur-sm py-2 md:py-4 px-2 md:px-6 rounded-2xl shadow-2xl shadow-[#ff500b2d] text-white md:text-lg">
                    <Link
                        to="profile"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={2000}
                        className="active:translate-x-2"
                    >
                        <motion.button
                            whileHover={{scale: 1.1, originX: -1.01}}
                            transition={{type: "spring", stiffness: 250}}
                            className=""
                        >
                            <p className="navItems flex flex-col items-center gap-2 text-xs md:text-lg text-center text-white mb-2 duration-200">
                                <FaUserAlt className="text-lg md:text-4xl" />
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
                            whileHover={{scale: 1.1, originX: -1.01}}
                            transition={{type: "spring", stiffness: 250}}
                            className=""
                        >
                            <p className="navItems flex flex-col gap-2 items-center text-white text-xs md:text-lg mb-2  ">
                                <FaAddressCard className="text-lg md:text-4xl" />
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
                            whileHover={{scale: 1.1, originX: -1.01}}
                            transition={{type: "spring", stiffness: 250}}
                            className=""
                        >
                            <p className="navItems flex flex-col gap-2 text-center text-white text-xs md:text-lg mb-2 ">
                                <CogIcon className="h-5 md:h-12" />
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
                            whileHover={{scale: 1.1, originX: -1.01}}
                            transition={{type: "spring", stiffness: 250}}
                            className=""
                        >
                            <p className="navItems flex flex-col gap-2 text-center text-white text-xs md:text-lg mb-2 ">
                                <CommandLineIcon className="h-5 md:h-12" />
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
                            whileHover={{scale: 1.1, originX: -1.01}}
                            transition={{type: "spring", stiffness: 250}}
                            className=""
                        >
                            <p className="navItems flex flex-col gap-2 text-center text-white text-xs md:text-lg mb-2 ">
                                <RocketLaunchIcon className="h-5 md:h-12" />
                                Projects
                            </p>
                        </motion.button>
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={2000}
                    >
                        <motion.button
                            whileHover={{scale: 1.1, originX: -1.01}}
                            transition={{type: "spring", stiffness: 250}}
                            className=""
                        >
                            <p className="navItems flex flex-col gap-2 text-center text-white text-xs md:text-lg mb-2 ">
                                <PaperAirplaneIcon className="h-5 md:h-12 -rotate-45" />
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
