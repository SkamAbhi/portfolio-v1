// pages/index.tsx
"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate, useScroll, useSpring } from "framer-motion";
import { MenuToggle, Navigation } from "./Components/Navbar";
import "./globals.css";
import useMousePosition from "../utils/useMosusePostion";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "@/components/CircleSkills";
import { RevealingTextContainer, RevealingTextItem } from "./ui/RevealingText";
import AboutMe from "./AboutMe";
import Experience from "./Experience";

export default function Home() {
  const { x, y } = useMousePosition();

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const size = 40;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
      const menuAnimations = isOpen
        ? [
            [
              "nav",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
            ],    
          ]
        : [
            ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
          ];
  
      animate([
        [
          "path.top",
          { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" }
        ],
        ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" }
        ],
        ...menuAnimations
      ]);
    }, [isOpen]);
  
    return scope;
  }
  const scope = useMenuAnimation(isOpen);
  return (
    <div  ref={scope} className="overflow-hidden pl-[10rem] w-full flex justify-center flex-col">
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
   
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : "-100%" }} 
        className="menu"
      >
        <Navigation isOpen={isOpen} />
      </motion.div>

      <motion.div className="flex h-screen justify-center w-full  mb-8 items-center mt-8">
        <motion.div className=" flex w-full items-center ">
          <motion.div className="flex flex-col w-full max-w-[32rem]">
            <h1 className="text-white w-full font-bold mb-6 text-5xl">
              Heii, I am Abhishek Singh 
            
              <div className="inline-block ml-2  animate-rotate text-4xl">👋</div>            </h1>
            <h2 className="text-white text-xl">
              I'm a passionate software engineer with an interest in web
              development
            </h2>
          </motion.div>

          <motion.div className=" w-full ml-4">
            <OrbitingCirclesDemo />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="text-white fixed top-0 left-0 right-0 h-1 origin-left bg-blue-700"
        style={{ scaleX }}
      />
      <div className="mask-container">
        <motion.div
          className="mask"
          style={{
            transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
          }}
        />
      </div>

      <div id="about" className=" px-30 pb-32">
        <AboutMe/>
      </div>
      <div id="experience" className=" px-30 pb-32">
        <h2 className="text-white">
          
          <Experience/>
        </h2>
      </div>
      <div id="projects" className=" px-30 pb-80">
        <h2 className="text-white">
          <span className="border-b">Projects</span>
        </h2>
      </div>
      <div id="skills" className=" px-30 pb-80">
        <h2 className="text-white">
          <span className="border-b">Skills</span>
        </h2>{" "}
        {/* Contact section content */}
      </div>
      <div id="contact" className=" px-30 pb-80">
        <h2 className="text-white">
          <span className="border-b">Contact</span>
        </h2>{" "}
        {/* Contact section content */}
      </div>
    </div>
  );
}
