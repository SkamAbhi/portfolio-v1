import React, { useRef } from "react";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";
import { motion, useScroll, useTransform } from "framer-motion";

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
  } as any);

  const { scrollYProgress: opacityScroller } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  } as any);
  const sectionOpacity = useTransform(opacityScroller, [0.4, 0.8], [1, 0]);

  const text = [
    "Started with a keyboard and curiosity,",
    "turning ideas into Reality.",
    "Bridging design and development,",
    "I craft seamless, responsive UIs,",
    "and write efficient, scalable ",
    "backend logic.",
  ];
  
    
  return (
    <motion.section
      style={{ opacity: sectionOpacity }}
      id="about"
      ref={sectionRef}
      className="relative  select-none flex flex-col"
    >
        {" "}
        <h2 className="text-white">
          <motion.span
    className="border-b  border-gray-400 text-xl font-bold mb-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >About Me</motion.span>
        </h2>
      <motion.div
        variants={hideAndShowVariant}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-20 px-8 hidden sm:block"
      >

        <RevealingTextContainer scrollYProgress={scrollYProgress}>
          {text.map((text, i) => (
            <RevealingTextItem index={i} key={i}>
                {text}
            </RevealingTextItem>
          ))}
        </RevealingTextContainer>
      </motion.div>
    </motion.section>
  );
}

export default AboutMe;
