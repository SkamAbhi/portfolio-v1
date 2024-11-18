import { useInView } from "@/lib/useInView";
import { motion } from "framer-motion";

interface ExperienceProps {
  position: string;
  company: string;
  duration: string;
  location: string;
  companyLogo: string;
}

export const ExperienceCard: React.FC<ExperienceProps> = ({
  position,
  company,
  duration,
  location,
  companyLogo,
}) => {
  const { isInView, elementRef } = useInView();

  return (
    <motion.div
      ref={elementRef}
      className="flex flex-col md:flex-row justify-between fade-border items-start md:items-center w-full mb-6 md:mb-10 font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0.5,
        y: isInView ? 0 : 20,
      }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <motion.div
        className="text-base md:text-lg text-gray-300 flex flex-col p-4 md:p-10 font-medium w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col">
          <div className="text-xl md:text-2xl font-bold">{position}</div>
          <span className="text-xl md:text-2xl font-bold mt-2">{company}</span>
        </div>
        <div className="flex flex-col text-sm md:text-base mt-3">
          <span>{duration}</span>
          <span className="text-sm md:text-base text-gray-400">{location}</span>
        </div>
      </motion.div>

      {/* Logo Section */}
      <motion.div
        className="text-lg text-gray-300 flex items-start md:items-center p-4 md:p-10 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src={companyLogo}
          width={40}
          height={40}
          className="bg-gray-50 p-1 md:w-[60px] md:h-[60px]"
          alt={`${company} logo`}
        />
      </motion.div>
    </motion.div>
  );
};
