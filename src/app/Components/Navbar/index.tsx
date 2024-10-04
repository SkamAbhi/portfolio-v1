import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon, ScrollText } from "lucide-react";

// Path component
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

// MenuToggle component
export const MenuToggle = ({ toggle }) => (
  <div className="fixed top-0 left-0 right-0 flex justify-between p-5 px-10 bg-transparent z-50">
    <div>
      <img src="/logo.svg" height={48} width={48} alt="logo" />
    </div>

    <div className="flex justify-center items-center ">
      <div>
        <button className="flex items-center border border-violet-700 p-3 text-white">
        <ScrollText color="gray" height={24} width={24}  />

          View Resume
           </button>
      </div>
      <button onClick={toggle}>
        <MenuIcon color="gray" height={40} width={40}  />
      </button>
    </div>
  </div>
);


// MenuItem component
export const MenuItem = ({ i, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: 50 }}  // Start off-screen (y: 50) with opacity 0
      animate={{ opacity: 1, x: 0 }}  // Animate to on-screen position (y: 0) with opacity 1
      exit={{ opacity: 0, y: 50 }}  // Animate out when removing
      transition={{
        delay: index * 0.3,  // Increase delay for stagger effect
        duration: 0.5,  // Control the duration of the animation
        ease: "easeOut",  // Smooth the animation
      }}
      whileHover={{ scale: 1.1 }}  // Scale up slightly on hover
      whileTap={{ scale: 0.95 }}  // Scale down slightly on tap
      className="cursor-pointer"
    >
      {i}
    </motion.li>
  );
};
// Navigation component
export const Navigation = ({ isOpen }) => {
  return (
    <motion.div
      key={isOpen ? "open" : "closed"} // Ensure component re-renders
      className="fixed inset-0 bg-black z-10 flex justify-center items-center"
      initial={{ x: "100%" }}  // Start off-screen to the right
      animate={{ x: isOpen ? "0%" : "100%" }}  // Slide in from the right when open
      exit={{ x: "-100%" }} // Slide out to the right when closed
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.ul
        className="space-y-4 text-white text-center font-semibold text-2xl"
        initial="hidden"
        animate={isOpen ? "show" : "hidden"} // Toggle visibility based on isOpen
        exit="hidden" // Ensure items animate out when closing
        variants={{
          hidden: { opacity: 0 },  // Hidden state
          show: {
            opacity: 1,  // Visible state
            transition: {
              staggerChildren: 0.2,  // Stagger children for scrolling effect
            },
          },
        }}
      >
        {itemIds.map((i, index) => (
          <MenuItem key={index} i={i} index={index} />
        ))}
      </motion.ul>
    </motion.div>
  );
};


const itemIds = ["HOME", "ABOUT", "EXPERIENCE", "PROJECTS", "CONTACT"];
