import { motion } from "framer-motion";
import { ExperienceCard } from "../Components/ExperienceCard";

const experienceData = [
  {
    position: "Frontend Engineer",
    company: "Anthaathi",
    duration: "Feb 2023 - Present (1.5+ years)",
    location: " Kolhapur, Maharashtra, India · On-site ",
    companyLogo: "/logo.png",
  },
  {
    position: "Frontend Engineer Intern ",
    company: "Anthaathi",
    duration: "Sept 2022 - Feb 2023 ( 6 Months )",
    location: " Kolhapur, Maharashtra, India · On-site ",
    companyLogo: "/logo.png",
  },
];

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <motion.span
        className="border-b border-gray-400 text-white text-2xl md:text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Experience
      </motion.span>

      <div className="flex flex-col items-center my-4 md:my-8 mt-10 md:mt-20">
        <motion.div
          className="flex flex-col justify-center items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="text-white/90 text-lg md:text-xl font-bold fade-border mb-4 md:mb-8 w-full flex justify-center p-4 md:p-10 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            2+ years of building and trying epic things
          </motion.div>

          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              position={experience.position}
              company={experience.company}
              duration={experience.duration}
              location={experience.location}
              companyLogo={experience.companyLogo}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
