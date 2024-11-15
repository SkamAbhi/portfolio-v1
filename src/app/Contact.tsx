import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";

const ContactCard = ({
  icon: Icon,
  title,
  value,
  link,
  gradient,
  description,
}: {
  icon: any;
  title: string;
  value: string;
  link: string;
  gradient: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex w-full overflow-hidden rounded-md group bg-zinc-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* White Overlay */}
      <span className="absolute w-0 h-full transition-all duration-1000 ease-out bg-white left-0 top-0 group-hover:w-full -z-1" />

      {/* Content */}
      <div className="relative w-full p-8 border border-zinc-800/50 rounded-md z-10">
        <div className="flex items-start justify-between">
          <div className="flex flex-row gap-4">
            <motion.div
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon
                className={`w-8 h-8 bg-gradient-to-r ${gradient} bg-clip-text text-white group-hover:text-black `}
              />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-black transition-colors duration-300">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm mb-4 group-hover:text-zinc-600 transition-colors duration-300">
                {description}
              </p>
              <span className="text-zinc-300 font-medium group-hover:text-zinc-800 transition-colors duration-300">
                {value}
              </span>
            </div>
          </div>

          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-black transition-colors duration-300" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
};
const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@example.com",
    link: "mailto:hello@example.com",
    gradient: "from-blue-600 to-cyan-500",
    description: "Drop me an email for any inquiries",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/johndoe",
    link: "https://linkedin.com/in/johndoe",
    gradient: "from-blue-400 to-blue-600",
    description: "Let's connect professionally",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/johndoe",
    link: "https://github.com/johndoe",
    gradient: "from-purple-600 to-pink-500",
    description: "Check out my code repositories",
  },
  {
    icon: Twitter,
    title: "Twitter",
    value: "@johndoe",
    link: "https://twitter.com/johndoe",
    gradient: "from-sky-400 to-blue-500",
    description: "Follow me for updates",
  },
];

// Contact section
function Contact() {
  return (
    <section className="bg-black min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Choose your preferred way to connect. I'm always open to new
            opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <ContactCard key={index} {...method} />
          ))}
        </div>

        {/* Status Indicator */}
        <motion.div
          className="mt-12 flex items-center gap-4 text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for new opportunities
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
