"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies.
      </p>
      <p>
        <span> </span>Motivated and detail-oriented React.js developer with 2 years of experience in building responsive, dynamic web applications. Skilled in JavaScript, react js, next js, and modern front-end development practices. Seeking to leverage my expertise in delivering high-quality user interfaces and scalable solutions to contribute to innovative projects.<span className="font-medium"> Graduated with First Class with Distinction in Bachelor of Computer Application</span>  with a strong interest in web
        Development. and also i am react js developer at <span className="underline">Deskcode Solution</span>{" "}
       Collaborated with team members to created many projcet in react js techology for company and
        client and learned many new things and developed strong communication
        start intershipped in implies soluation and now I am working as an employ
      </p>
    </motion.section>

  );
}
