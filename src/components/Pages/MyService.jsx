/* eslint-disable react/no-unescaped-entities */
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MyService = () => {
  const services = [
    {
      id: 1,
      serviceTitle: "MERN Stack Developer",
      description: `Utilizing Mern Stack technology, I can create a full-stack web application.By "full-stack web application project," I mean one that uses HTML, CSS, Bootstrap, Tailwind CSS, React JS, Node JS, Express JS, and MongoDB.`,
    },
    { id: 2, serviceTitle: "Front-End Developer", description: `I am a proficient front-end developer who is committed to creating engaging and seamless user experiences. We specialize in converting design concepts into pixel-perfect, responsive websites and web applications thanks to our expertise in HTML, CSS, and JavaScript.` },
    { id: 3, serviceTitle: "Back-End Developer", description: `I'm a talented React developer who focuses on making interactive and dynamic user interfaces that improve the user experience. We create scalable and reusable components using React.js, a potent JavaScript library, to give life to your web applications. We use React's flexibility and efficiency to deliver high-performing solutions, whether we're building responsive single-page applications or incorporating it into ongoing projects.` },
  ];

  return (
    <motion.section
          className="animationContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
    <div
      id="service"
      className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 my-20 md:my-32"
    >
      <div className="md:w-1/2 space-y-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="md:w-8/12 space-y-4 border-b border-gray-500 pb-4"
          >
            <h1
              className="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#52c3f3] to-[#f5aff6]"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              {service.serviceTitle}
            </h1>
            <p className="text-lg text-gray-200" 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="50"
            data-aos-duration="800">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="md:w-1/2 border border-gray-600 shadow-2xl shadow-[#ff6f0034] rounded-[60px] p-6 md:p-12 bg-[url('https://i.ibb.co/VHQJ57R/bg.png')] bg-auto bg-no-repeat md:min-h-[450px] bg-right-top"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-delay="500"
      data-aos-duration="800"

      >
        <h1 className="text-3xl md:text-5xl my-4">MY SERVICE</h1>
        <p className="text-xl md:text-2xl text-gray-300 md:w-10/12 my-4">
          For the past six months, I've been researching MERN Stack and web
          development. I'm just beginning to develop my skills.
        </p>
        <Link
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-delay="1000"
                data-aos-duration="1000"
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
    </motion.section>
  );
};

export default MyService;
