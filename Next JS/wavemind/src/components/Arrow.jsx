"use client"; // top to the file
import React from 'react'
import { motion } from "framer-motion"
import { FaCircleArrowRight } from "react-icons/fa6";

function Arrow({ isHovered }) {
  return (
    <motion.div
      className="w-fit h-fit rounded-lg"
      animate={isHovered ? { scale: 1.1, rotate: 45 } : { scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <FaCircleArrowRight className=" fill-white -rotate-45 w-[1.75rem] h-[1.75rem]" />
    </motion.div>
  );
}
export default Arrow