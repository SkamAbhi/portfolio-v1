import React, { useEffect, useState } from "react";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";

const roles = [
  "Software Engineer",
  "Web Developer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
];

const TypingRoleText = () => {
  const [scope, animate] = useAnimate();
  const [currentRole, setCurrentRole] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      const role = roles[currentRole];
      const speed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText !== role) {
        setCurrentText(role.slice(0, currentText.length + 1));
      } else if (isDeleting && currentText !== "") {
        setCurrentText(currentText.slice(0, -1));
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setIsDeleting(true);
        timeout = setTimeout(typeText, 1500);
        return;
      }

      timeout = setTimeout(typeText, speed);
    };

    timeout = setTimeout(typeText, 100);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRole]);

  return (
    <div className="h-[40px] relative flex items-center" ref={scope}>
      <h2 className="text-white text-2xl mt-6 font-medium">
        I&#39;m a passionate{" "}
        <span className="text-blue-500 font-semibold inline-flex">
          {currentText}
          <span className="animate-blink ml-0.5">|</span>
        </span>
      </h2>
    </div>
  );
};

function Hero() {
  const { scrollY } = useScroll();

  const xLeft = useTransform(scrollY, [0, 500], [0, -500]);
  const xRight = useTransform(scrollY, [0, 500], [0, 500]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative">
      <section className="min-h-screen relative overflow-hidden">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-zinc-900/0"
        />

        <div className="max-w-7xl overflow-hidden min-h-screen flex justify-center flex-col mx-auto px-6 pt-12">
          <motion.p
            className="text-zinc-500 font-medium tracking-wider mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            HI THERE, I&apos;M
          </motion.p>

          <div className="space-y-8 relative">
            <motion.div
              style={{ x: xLeft }}
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h1
                className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white opacity-85 text-left"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Abhishek
              </motion.h1>
            </motion.div>

            <motion.div
              style={{ x: xRight }}
              className="overflow-hidden flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.h1
                className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white opacity-85 text-right"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Singh
              </motion.h1>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity }}
            className="max-w-2xl space-y-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypingRoleText />

            <div className="flex gap-4 pt-4">
              <button className="relative inline-flex items-center px-8 py-3 overflow-hidden font-medium text-white bg-zinc-900 border border-zinc-800 rounded-lg group">
                <a href="#contact">
                  <span className="absolute w-0 h-full transition-all duration-500 ease-out bg-white left-0 top-0 group-hover:w-full -z-1"></span>
                  <span className="relative group-hover:text-black transition-colors duration-300 ease-out">
                    Get in Touch
                  </span>
                </a>
              </button>
              <button className="relative inline-flex items-center px-8 py-3 overflow-hidden font-medium text-white bg-zinc-900 border border-zinc-800 rounded-lg group">
                <a href="#projects">
                  <span className="absolute w-0 h-full transition-all duration-500 ease-out bg-white left-0 top-0 group-hover:w-full -z-1"></span>
                  <span className="relative group-hover:text-black transition-colors duration-300 ease-out">
                    View Projects
                  </span>
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const BackgroundGradient = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 500],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]
  );

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{ backgroundColor }}
    />
  );
};

export default Hero;
