import { motion } from "framer-motion";
import {
  Blocks,
  Brain,
  Code2,
  Database,
  Git,
  Globe,
  Layout,
  Library,
  Laptop,
  Server,
  Settings,
  Wrench,
  GitBranch,
} from "lucide-react";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-blue-500" />,
    skills: [
      {
        name: "React.js",
        icon: <Code2 className="w-5 h-5 text-blue-500" />,
      },
      {
        name: "TypeScript",
        icon: <Blocks className="w-5 h-5 text-blue-600" />,
      },
      {
        name: "Next.js",
        icon: <Globe className="w-5 h-5 text-white" />,
      },
      {
        name: "Tailwind CSS",
        icon: <Laptop className="w-5 h-5 text-cyan-400" />,
      },
      {
        name: "Redux",
        icon: <Library className="w-5 h-5 text-purple-500" />,
      },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-green-500" />,
    skills: [
      {
        name: "Node.js",
        icon: <Server className="w-5 h-5 text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <Settings className="w-5 h-5 text-white" />,
      },
      {
        name: "MongoDB",
        icon: <Database className="w-5 h-5 text-green-600" />,
      },
      {
        name: "REST APIs",
        icon: <Globe className="w-5 h-5 text-blue-400" />,
      },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-8 h-8 text-gray-400" />,
    skills: [
      {
        name: "Git",
        icon: <GitBranch className="w-5 h-5 text-orange-500" />,
      },
      {
        name: "Problem Solving",
        icon: <Brain className="w-5 h-5 text-yellow-500" />,
      },
      {
        name: "System Design",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
      },
    ],
  },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:border-white/50 transition-all duration-300 flex flex-col items-center gap-4 h-full"
        whileHover={{ y: -8, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
        transition={{
          y: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
      >
        <motion.div
          className="p-3 rounded-full bg-zinc-800/50"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ color: "#ffffff" }}
            whileHover={{ color: "#3B82F6" }}
            transition={{ duration: 0.3 }}
          >
            {skill.icon}
          </motion.div>
        </motion.div>

        <motion.span
          className="text-gray-200 font-medium text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

const SkillCategory = ({ category }: { category: SkillCategory }) => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-3 mb-8"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
          {category.icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

function Skills() {
  return (
    <section className="bg-black  py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <motion.h2
            className="text-3xl font-bold text-white border-b border-gray-600 inline-block pb-2"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A comprehensive overview of my technical skills across different
            areas of software development.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
