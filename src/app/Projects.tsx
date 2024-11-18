import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState } from "react";

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    imageUrl: "/resume-builder-logo.png",
    title: "Resume Builder",
    description:
      "An intuitive platform for creating professional resumes with customizable templates and real-time GraphQL-powered data integration.",
    tags: ["React", "GraphQL", "Tailwind", "TypeScript"],
    githubLink: "https://github.com/SkamAbhi/Resume-Builder",
  },
  {
    imageUrl: "/crypto-logo.png",
    title: "Crypto Tracker",
    description:
      "A dynamic platform for tracking cryptocurrency prices, market trends, and news in real-time with a sleek, user-friendly interface.",
    tags: ["React", "JavaScript", "Tailwind", "REST API"],
    githubLink: "https://github.com/SkamAbhi/Crypto-website",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "50px" }}
      whileHover={{ scale: 1.02 }}
      className={`bg-zinc-900 rounded-xl p-4 sm:p-6 hover:shadow-indigo-50/10 border border-zinc-800/50 hover:border-zinc-700/50 hover:shadow-lg ${
        isHovered ? "border-zinc-700" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {project.title}
          </h3>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 sm:px-3 py-1 text-xs font-medium bg-blue-500/10 text-white rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm overflow-hidden font-medium text-white bg-zinc-900 border border-zinc-700/50 rounded-lg group"
        >
          <span className="absolute w-0 h-full transition-all duration-500 ease-out bg-white left-0 top-0 group-hover:w-full -z-1"></span>
          <span className="relative group-hover:text-black transition-colors duration-300 ease-out flex items-center gap-2 sm:gap-3">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub
          </span>
        </a>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div className="bg-black py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 border-b border-gray-600 inline-block pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8 sm:mb-12 md:gap-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <MoreProjects />
      </div>
    </div>
  );
}

function MoreProjects() {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <motion.div
      className="relative h-[200px] sm:h-[250px] mt-12 md:mt-4  bg-zinc-900 rounded-xl border border-zinc-800/50 overflow-hidden group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: x1 }}
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap flex gap-10 sm:gap-20"
        >
          {Array(10)
            .fill("MORE PROJECTS")
            .map((text, i) => (
              <span
                key={i}
                className="text-[50px] sm:text-[100px] font-bold text-white/5"
              >
                {text}
              </span>
            ))}
        </motion.div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="text-center max-w-md">
          <motion.h3
            className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Want to see more?
          </motion.h3>

          <motion.p
            className="text-zinc-400 text-sm sm:text-base mb-4 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Check out my GitHub for more projects and experiments
          </motion.p>

          <motion.a
            href="https://github.com/SkamAbhi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm overflow-hidden font-medium text-white bg-zinc-800 border border-zinc-700/50 rounded-lg group/btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="absolute w-0 h-full transition-all duration-500 ease-out bg-white left-0 top-0 group-hover/btn:w-full -z-1"></span>
            <span className="relative group-hover/btn:text-black transition-colors duration-300 ease-out flex items-center gap-2 sm:gap-3">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View More Projects
            </span>
          </motion.a>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900 pointer-events-none" />
    </motion.div>
  );
}

export default Projects;
