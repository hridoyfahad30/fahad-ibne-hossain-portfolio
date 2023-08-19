import { motion } from "framer-motion";

const MySkills = () => {
  const mySkills = [
    { id: 1, skill: "HTML 5", score: 85 },
    { id: 2, skill: "CSS 3", score: 80 },
    { id: 3, skill: "JavaScript", score: 70 },
    { id: 4, skill: "BootStrap", score: 90 },
    { id: 5, skill: "Tailwind CSS", score: 85 },
    { id: 6, skill: "React JS", score: 70 },
    { id: 7, skill: "Next JS", score: 60 },
    { id: 8, skill: "Firebase", score: 55 },
    { id: 9, skill: "MongoDB", score: 50 },
    { id: 10, skill: "Node JS", score: 50 },
    { id: 11, skill: "Express JS", score: 55 },
    { id: 12, skill: "Redux", score: 60 },
  ];

  return (
    <motion.div
      className="skillsCardContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ delay: 0.5, duration: 2 }}
    >
      <div
        id="skills"
        className="my-12 md:my-32 min-h-screen z-0"
      >
        <h1 className="text-center text-5xl py-8 md:py-12">
          <span className="text-xl font-light">Know About</span> <br /> My
          Skills
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  mx-auto">
          {mySkills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.2, originX: 0.5 }}
              transition={{ type: "spring", stiffness: 250 }}
              
              key={skill.id}
              className="card w-64 my-6 md:my-12 bg-gradient-to-tl from-[#1b379b46] to-[#9051a336] bg-opacity-50 mx-auto shadow-2xl shadow-[#ff720698] backdrop-brightness-75"
            >
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">
                  {skill.skill}
                </h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": skill.score }}
                >
                  {skill.score}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MySkills;
