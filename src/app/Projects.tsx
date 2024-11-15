import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

const projectData: Project[] = [
  {
    imageUrl: "/logo.png",
    title: "Lingo",
    description:
      "A modern language learning platform that helps users master new languages through interactive lessons and AI-powered feedback.",
    tags: ["Next.js", "TypeScript", "Tailwind", "GraphQL"],
    githubLink: "https://github.com/yourproject",
    demoLink: "https://yourprojectdemo.com",
  },
  {
    imageUrl: "/logo.png",
    title: "Lingo",
    description:
      "A modern language learning platform that helps users master new languages through interactive lessons and AI-powered feedback.",
    tags: ["Next.js", "TypeScript", "Tailwind", "GraphQL"],
    githubLink: "https://github.com/yourproject",
    demoLink: "https://yourprojectdemo.com",
  },
  {
    imageUrl: "/logo.png",
    title: "Lingo",
    description:
      "A modern language learning platform that helps users master new languages through interactive lessons and AI-powered feedback.",
    tags: ["Next.js", "TypeScript", "Tailwind", "GraphQL"],
    githubLink: "https://github.com/yourproject",
    demoLink: "https://yourprojectdemo.com",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8 relative">
        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs font-medium text-gray-300 border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <div className="group/btn relative">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-5 py-2.5 overflow-hidden font-medium text-white bg-zinc-800 rounded-lg transition-all duration-300"
            >
              <span className="absolute w-0 h-full transition-all duration-500 ease-out bg-white left-0 top-0 group-hover/btn:w-full -z-1"></span>
              <span className="relative group-hover/btn:text-black transition-colors duration-300 ease-out flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
function Projects() {
  return (
    <div className="bg-black  py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 border-b border-gray-600 inline-block pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          <MoreProjects />
        </div>
      </div>
    </div>
  );
}

export default Projects;

function MoreProjects() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.05, 0]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  return (
    <motion.div
      className="relative  border-gray-600 border rounded-md group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Border Container */}
      <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-b from-zinc-700 via-zinc-800/50 to-transparent">
        <div className="absolute inset-0 bg-black rounded-2xl" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {/* First Row */}
        <motion.div
          style={{ x: x1 }}
          className="absolute translate-y-[20%] whitespace-nowrap flex gap-20"
        >
          {Array(10)
            .fill("MORE PROJECTS")
            .map((text, i) => (
              <span key={i} className="text-[40px] font-bold text-white/20">
                {text}
              </span>
            ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
        ={" "}
        <div className="relative z-10 text-center px-4">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Want to see more?
          </motion.h3>

          <motion.p
            className="text-zinc-400 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Check out my GitHub for more projects, experiments, and
            contributions.
          </motion.p>

          {/* GitHub Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative inline-block"
          >
            ={" "}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-8 py-3 overflow-hidden font-medium text-white bg-zinc-900 border border-zinc-700/50 rounded-lg group"
            >
              <span className="absolute w-0 h-full transition-all duration-500 ease-out bg-white left-0 top-0 group-hover:w-full -z-1"></span>
              <span className="relative group-hover:text-black transition-colors duration-300 ease-out flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub Profile
              </span>
            </a>
          </motion.div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute -top-20 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
