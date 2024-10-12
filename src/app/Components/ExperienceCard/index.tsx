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
      className="flex justify-between  fade-border items-center w-full mb-10 font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0.5,
        y: isInView ? 0 : 20,
      }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <motion.div
        className="text-lg text-gray-300 flex flex-col p-10 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col">
          {position}
          <span>{company}</span>
        </div>
        <div className="flex flex-col text-sm mt-3">
          <span>{duration}</span>
          <span>{location}</span>
        </div>
      </motion.div>
      <motion.div
        className="text-lg text-gray-300 flex items-start flex-col p-10 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src={companyLogo}
          width={60}
          height={60}
          className="bg-gray-50 p-1"
          alt="company logo"
        />
      </motion.div>
    </motion.div>
  );
};
