import { motion } from "framer-motion";
import { ExperienceCard } from "./Components/ExperienceCard";

const experienceData = [
  {
    position: "Frontend Engineer",
    company: "Anthaathi",
    duration: "Feb 2023 - Present (2+ years)",
    location: " Kolhapur, Maharashtra, India · On-site ",
    companyLogo: "/logo.png",
  },
  {
    position: "Frontend Engineer Intern ",
    company: "Anthaathi",
    duration: "Oct 2022 - Feb 2023 ( 5 Months )",
    location: " Kolhapur, Maharashtra, India · On-site ",
    companyLogo: "/logo.png",
  },
];

export default function Experience() {
  return (
    <div>
      <motion.span
        className="border-b  border-gray-400 text-xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Experience
      </motion.span>

      <div className="flex flex-col items-center my-8">
        <motion.div
          className="flex flex-col justify-center items-center  max-w-5xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="text-white fade-border mb-12 w-full flex justify-center p-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            2+ years of building and trying epic contents
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
