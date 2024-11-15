import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Assuming you have these components in your project
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";

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

  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section className="bg-black py-20">
      <motion.div
        style={{ opacity: sectionOpacity }}
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex flex-col gap-2">
            <motion.h2
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-zinc-400 text-lg max-w-2xl mt-4"
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
          className="mt-8 space-y-6"
        >
          <RevealingTextContainer scrollYProgress={scrollYProgress}>
            {text.map((line, i) => (
              <RevealingTextItem
                key={i}
                index={i}
                className="text-xl text-zinc-300 leading-relaxed"
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
