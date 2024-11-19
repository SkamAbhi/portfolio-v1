"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./globals.css";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skill";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Footer from "./Footer";
import Header from "./Components/Navbar";
import Experience from "./Pages/Experience";

export default function Home() {
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
