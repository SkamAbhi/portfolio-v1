// pages/index.tsx
"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MenuToggle, Navigation } from "./Components/Navbar";
import "./globals.css";
import useMousePosition from "../utils/useMosusePostion";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "@/components/CircleSkills";

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

  return (
    <div className="overflow-hidden">
      <MenuToggle toggle={toggleMenu} />
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : "0%" }}
        className="menu"
      >
        <Navigation isOpen={isOpen}  />
      </motion.div>
      <motion.div className="w-full">
      <OrbitingCirclesDemo/>
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
      <div id="about" className="p-80">
        <h2>About Me</h2>
        {/* About section content */}
        
        <p className="text-white text-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          reprehenderit ab debitis soluta? Vero at{" "}
        </p>
        <p className="text-white text-6xl">
          reiciendis temporibus reprehenderit excepturi, asperiores, odit non.
          Sapiente odit repudiandae iure, quos nam quas maiores?
        </p>
      </div>
      <div id="projects" className="p-80">
        <h2>Projects</h2>
        {/* Projects section content */}
      </div>
      <div id="contact" className="p-80">
        <h2>Contact Me</h2>
        {/* Contact section content */}
      </div>
    </div>
  );
}
