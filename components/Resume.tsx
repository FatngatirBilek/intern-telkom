"use client";

import React from "react";
import { FaReact, FaNodeJs, FaJs, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a software engineer with a passion for building scalable and maintainable web applications.",
  info: [
    { fieldName: "Name", fieldValue: "Fathir Bima Shabri" },
    { fieldName: "Email", fieldValue: "fathirforbusiness@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Indonesian" },
    { fieldName: "Languages", fieldValue: "Bahasa, English" },
  ],
};

const experience = {
  icon: "/images/badge.svg",
  title: "My Experience",
  description:
    "I have experience as a Web Developer, focusing on web development and project management.",
  items: [
    {
      company: "MPK Satriya Adhijaya (School organization)",
      position: "Web Dev at Airlangga",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  icon: "/images/cap.svg",
  title: "My Education",
  description: "I haven't Completed my Education",
  items: [
    {
      school: "state vocational high school 1 klaten",
      degree: "-",
      duration: "2023 - present",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have built my skills in React, NextJS, MongoDB, and TypeScript.",
  skillList: [
    { name: "React", icon: <FaReact /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "JavaScript", icon: <FaJs /> },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto flex flex-col gap-10 mt-10 px-4 sm:px-6 lg:px-8 w-full">
        {/* Experience */}
        <section>
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              {experience.title}
            </h3>
            <p className="max-w-[600px] text-white/60 mb-4">
              {experience.description}
            </p>
            <ScrollArea className="h-auto max-h-[180px]">
              <ul className="grid grid-cols-1 gap-4">
                {experience.items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] py-5 px-4 sm:px-8 rounded-xl flex flex-col justify-center gap-1"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-lg sm:text-xl">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60 text-sm">{item.company}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              {education.title}
            </h3>
            <p className="max-w-[600px] text-white/60 mb-4">
              {education.description}
            </p>
            <ScrollArea className="h-auto max-h-[140px]">
              <ul className="grid grid-cols-1 gap-4">
                {education.items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] py-4 px-4 sm:px-8 rounded-xl flex flex-col justify-center gap-1"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-lg sm:text-xl">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60 text-sm">{item.school}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              {skills.title}
            </h3>
            <p className="max-w-[600px] text-white/60 mb-4">
              {skills.description}
            </p>
            <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.skillList.map((skill, index) => (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[70px] sm:h-[90px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-3xl sm:text-4xl group-hover:text-accent transition-all duration-300">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About Me */}
        <section>
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              {about.title}
            </h3>
            <p className="max-w-[600px] text-white/60 mb-4">
              {about.description}
            </p>
            <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-y-2 max-w-[620px]">
              {about.info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-lg sm:text-xl">{item.fieldValue}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
