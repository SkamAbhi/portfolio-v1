import { motion } from "framer-motion";
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
  },{
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
  // Add more projects here as needed
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="border border-gray-600 bg-transparent p-6 rounded-lg max-w-[28rem] flex  flex-col items-start shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={project.imageUrl}
        alt={`${project.title}-image`}
        className="w-full h-[150px] object-cover rounded-md mb-4"
      />
      <h1 className="text-white text-2xl font-semibold mb-2">{project.title}</h1>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs text-gray-200 bg-gray-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-200 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          GitHub
        </a>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-200 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          View Demo
        </a>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div className="py-12">
      <motion.h2
        className="text-3xl font-bold text-white mb-8 border-b border-gray-600 inline-block pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center max-w-[70rem] gap-20">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
