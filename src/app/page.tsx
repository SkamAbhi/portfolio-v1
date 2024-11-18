"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./globals.css";
import useMousePosition from "../utils/useMosusePostion";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skill";
import Contact from "./Contact";

import Hero from "./Hero";
import Footer from "./Footer";
import Header from "./Components/Navbar";

export default function Home() {
  const { x, y } = useMousePosition();
  const [isOpen, setIsOpen] = React.useState(false);
  const size = 40;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-black min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-zinc-500 origin-left z-[999]"
        style={{ scaleX }}
      />
      <div className="fixed top-0 left-0 right-0  z-50  ">
        <Header />
      </div>
      <section id="home">
        <Hero />
      </section>
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        <section id="about">
          <AboutMe />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
