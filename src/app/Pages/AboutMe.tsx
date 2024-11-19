"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  RevealingTextContainer,
  RevealingTextItem,
} from "../Components/ui/RevealingText";

function AboutMe() {
  const hideAndShowVariant = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: opacityScroller } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });

  const sectionOpacity = useTransform(opacityScroller, [0.4, 0.8], [1, 0]);

  const text = [
    "Started with a keyboard and curiosity,",
    "turning ideas into Reality.",
    "Bridging design and development,",
    "I craft seamless, responsive UIs,",
    "and write efficient, scalable",
    "backend logic.",
  ];

  const mobileConfig = {
    widthStart: 0.1,
    widthEnd: 0.4,
    duration: 0.2,
  };

  const desktopConfig = {
    widthStart: 0.2,
    widthEnd: 0.6,
    duration: 0.3,
  };

  const [config, setConfig] = useState(mobileConfig);

  useEffect(() => {
    const currentConfig =
      window.innerWidth < 768 ? mobileConfig : desktopConfig;
    setConfig(currentConfig);
  }, []);

  return (
    <section className="bg-black py-10 md:py-20">
      <motion.div
        style={{ opacity: sectionOpacity }}
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 md:mb-20"
        >
          <div className="flex flex-col gap-2">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-zinc-400 text-base md:text-lg max-w-2xl mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A passionate developer crafting digital experiences
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={hideAndShowVariant}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 space-y-4 md:space-y-6"
        >
          <RevealingTextContainer
            scrollYProgress={scrollYProgress}
            widthStart={config.widthStart}
            widthEnd={config.widthEnd}
          >
            {text.map((line, i) => (
              <RevealingTextItem
                key={i}
                index={i}
                className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              >
                {line}
              </RevealingTextItem>
            ))}
          </RevealingTextContainer>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutMe;
