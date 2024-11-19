import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "abhisingh3476@gmail.com",
    link: "mailto:abhisingh3476@gmail.com",
    gradient: "from-blue-600 to-cyan-500",
    description: "Drop me an email for any inquiries",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/abhishek-singh",
    link: "https://www.linkedin.com/in/abhishek-singh-2469b2265/",
    gradient: "from-blue-400 to-blue-600",
    description: "Let's connect professionally",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/SkamAbhi",
    link: "https://github.com/SkamAbhi",
    gradient: "from-purple-600 to-pink-500",
    description: "Check out my code repositories",
  },
];

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
      <span className="absolute w-0 h-full transition-all duration-1000 ease-out bg-white left-0 top-0 group-hover:w-full -z-1" />

      <div className="relative w-full p-4 sm:p-8 border border-zinc-800/50 rounded-md z-10">
        <div className="flex items-start justify-between">
          {/* Content Section */}
          <div className="flex flex-col sm:flex-row sm:gap-4">
            {/* Icon - Hidden on mobile, shown on SM and up */}
            <motion.div
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="hidden sm:block"
            >
              <Icon
                className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${gradient} bg-clip-text text-white group-hover:text-black`}
              />
            </motion.div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-black transition-colors duration-300">
                {title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mb-2 sm:mb-4 group-hover:text-zinc-600 transition-colors duration-300">
                {description}
              </p>
              <span className="text-zinc-300 text-sm sm:text-base font-medium group-hover:text-zinc-800 transition-colors duration-300">
                {value}
              </span>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center gap-3">
            <motion.div
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="block sm:hidden"
            >
              <Icon
                className={`w-6 h-6 bg-gradient-to-r ${gradient} bg-clip-text text-white group-hover:text-black`}
              />
            </motion.div>

            <motion.div
              animate={{
                x: isHovered ? 5 : 0,
                y: isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 group-hover:text-black transition-colors duration-300" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};
function Contact() {
  return (
    <section className="bg-black py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl">
            Choose your preferred way to connect. I&apos;m always open to new
            opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => (
            <ContactCard key={index} {...method} />
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12 flex items-center gap-3 sm:gap-4 text-zinc-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-0"></span>
              <span className="blinking relative inline-flex rounded-full h-full w-full bg-green-500"></span>
            </span>
            Available for new opportunities
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
