import { motion, SVGMotionProps } from "framer-motion";
import { ScrollText } from "lucide-react";
import { RefAttributes, useEffect, useState } from "react";

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full md:hidden flex justify-center items-center bg-black">
        <div className="relative w-full max-w-[85rem] flex justify-between items-center p-4 sm:p-5 px-4 sm:px-10">
          <div className="text-xl sm:text-2xl text-white font-extrabold">
            A.S.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              animate={isOpen ? "open" : "closed"}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-white/10 transition-colors z-50"
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <Path
                  d="M 2 9.423 L 20 9.423"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <Path
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <motion.nav
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 
          ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center space-y-6 sm:space-y-8">
            {navigationItems.map((item, index) => (
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
                  className="text-2xl sm:text-4xl text-white font-bold hover:underline transition-colors"
                  onClick={handleClick}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;
