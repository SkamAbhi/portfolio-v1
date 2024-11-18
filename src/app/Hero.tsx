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
      <h2 className="text-white text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 font-medium">
        I&apos;m a passionate{" "}
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
  const isMobile = useMediaQuery("(max-width: 640px)");

  const xLeftMobile = useTransform(scrollY, [0, 300], [0, -300]);
  const xRightMobile = useTransform(scrollY, [0, 300], [0, 300]);

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

        <div className="max-w-7xl overflow-hidden min-h-screen flex justify-center flex-col mx-auto px-4 sm:px-6 pt-12">
          <motion.p
            className="text-white text-sm sm:text-base font-medium tracking-wider mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            HI THERE, I&apos;M
          </motion.p>

          {/* Mobile Layout */}
          <div className="block sm:hidden space-y-2">
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ x: xRightMobile }}
            >
              <motion.h1
                className="text-7xl font-bold text-white opacity-85 text-left"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Abhishek
              </motion.h1>
            </motion.div>

            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ x: xLeftMobile }}
            >
              <motion.h1
                className="text-7xl font-bold text-white opacity-85 text-left"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Singh
              </motion.h1>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:block space-y-8 relative">
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
            className="max-w-2xl space-y-6 mt-6 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypingRoleText />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export default Hero;
