import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      projectName: "Learning Camp",
      description: "A Complete Learning Website with Full CRUD operation.",
      liveLink: "https://learning-camp.web.app/",
      client: "https://github.com/hridoyfahad30/learning-camp-client",
      server: "https://github.com/hridoyfahad30/learning-camp-server",
      image: "https://i.ibb.co/SNY67NG/image.png",
    },
    {
      id: 2,
      projectName: "JUGUETE ÚNICO",
      description: "A e-commerce Website",
      liveLink: "https://toy-commerce.web.app/",
      client: "https://github.com/hridoyfahad30/jugute-unico-client",
      server: "https://github.com/hridoyfahad30/jugute-unico-server",
      image: "https://i.ibb.co/LpFQ3K9/image.png",
    },
    {
      id: 3,
      projectName: "Awesome Cheef",
      description: "A Complete Restaurant Management Website",
      liveLink: "https://awesome-recipe-c54d0.web.app/",
      client: "https://github.com/hridoyfahad30/awesome-cheef-client",
      server: "https://github.com/hridoyfahad30/awesome-cheef-server",
      image: "https://i.ibb.co/V21SS24/image.png",
    },
  ];

  return (
    <motion.div
      className="animationContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 2 }}
    >
      <div id="projects" className="my-12 md:my-32 py-12">
        <h1 className="text-center text-5xl py-8 md:py-12">
          <span className="text-xl font-light">Explore All</span> <br /> My
          Projects
        </h1>
        <p className="text-center text-xl mb-12 mx-4">
          I have recently completed this projects. Learning Camp , Awesome
          Cheef, JUGUETE ÚNICO. <br /> You can checkout my projects
        </p>
        <div className="grid md:grid-cols-3 md:gap-12">
          {projects.map((project) => (
            <motion.div
              whileHover={{ scale: 1.2, originX: 1 }}
              transition={{ type: "spring", stiffness: 40 }}
              key={project.id}
              className="card w-96 bg-base-100 shadow-xl relative group my-12"
            >
              <figure>
                <img className="w-96 h-72" src={project.image} alt="project" />
              </figure>
              <div className="card-body absolute backdrop-blur-sm min-h-full backdrop-brightness-[30%] hidden group-hover:block w-full rounded-2xl">
                <h2 className="text-center my-4 text-3xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#0eaaee] to-[#f5aff6]">
                  {project.projectName}
                </h2>
                <p className="mb-2 text-center my-2">{project.description}</p>
                <div className="space-y-6">
                  <Link
                    to={project.liveLink}
                    target="_blank"
                    className="bg-[#ffffff45] bg-opacity-25 hover:bg-gradient-to-tr from-[#2cc0ffe3] to-[#fbb1fcac] text-lg font-medium px-6 py-4 rounded-full flex justify-center items-center gap-2 shadow-xl shadow-[#ff720699]"
                  >
                    Live preview
                  </Link>
                  <div className="flex items-center justify-between">
                    <Link
                      to={project.client}
                      target="_blank"
                      className="bg-[#ffffff45] bg-opacity-25 hover:bg-gradient-to-tr from-[#2cc0ffe3] to-[#fbb1fcac] text-lg font-medium px-6 py-4 rounded-full flex justify-center items-center gap-2 shadow-xl shadow-[#ff720699]"
                    >
                      Client Repo
                    </Link>
                    <Link
                      to={project.server}
                      target="_blank"
                      className="bg-[#ffffff45] bg-opacity-25 hover:bg-gradient-to-tr from-[#2cc0ffe3] to-[#fbb1fcac] text-lg font-medium px-6 py-4 rounded-full flex justify-center items-center gap-2 shadow-xl shadow-[#ff720699]"
                    >
                      Server Repo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MyProjects;
