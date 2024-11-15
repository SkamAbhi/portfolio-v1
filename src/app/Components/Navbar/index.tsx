import { motion } from "framer-motion";

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.nav
      initial={false}
      animate={{ opacity: isOpen ? 1 : 0 }}
      className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="h-full flex flex-col items-center justify-center">
        <ul className="flex flex-col items-center space-y-8">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "Contact", href: "#contact" },
          ].map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{
                duration: 0.4,
                delay: isOpen ? index * 0.1 : 0,
              }}
            >
              <a
                href={item.href}
                className="text-white text-4xl font-bold hover:text-violet-500 transition-colors"
                onClick={() => {}}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
