"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtn from "./WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "Live Count",
    title: "Airlangga 2025 Live Count",
    description:
      "Dinamic Live count used on upcoming Airlangga 2025 build using nextjs using chartjs and mongodb + dashboard page for admin to manage the live count",
    stack: [{ name: "Typescript" }, { name: "NextJS" }, { name: "Mongodb" }],
    image: "/images/Projects/Airlangga2025.webp",
    // live: "https://example.com/NixyDotsLive",
    github: "https://github.com/FatngatirBilek/Airlangga2025",
  },
  {
    num: "02",
    category: "Dotfiles",
    title: "NixOS Hyprland dots",
    description:
      "Nixos hyprland dotfiles with custom color schemes and secret manager with nvidia+intel support and with acer module support for backlight keyboard",
    stack: [{ name: "Nix" }, { name: "Lua" }, { name: "Bash" }],
    image: "/images/Projects/Dots.webp",
    live: "https://example.com/NixyDotsLive",
    github: "https://github.com/FatngatirBilek/NixyDots",
  },
  {
    num: "03",
    category: "Live Count",
    title: "Airlangga Live Count",
    description:
      "Static Live count used on Airlangga 2024 build using nextjs using chartjs",
    stack: [{ name: "NextJS" }, { name: "ChartJS" }],
    image: "/images/Projects/Airlangga.webp",
    live: "https://example.com/Airlangga2024Live",
    github: "https://github.com/FatngatirBilek/Airlangga2024",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    const currenIndex = swiper.activeIndex;
    setProject(projects[currenIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category} Project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack Names */}
              <div className="flex gap-2 flex-wrap">
                {project.stack.map((tech, index) => (
                  <div key={index} className="text-xl text-accent">
                    {tech.name}
                    {index !== project.stack.length - 1 && ", "}
                  </div>
                ))}
              </div>
              {/* Border */}
              <div className="border border-white/20"> </div>
              {/* Button */}
              <div className="flex items-center gap-4 ">
                {/* Live Button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                          <TooltipContent>
                            <p> Live Project</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* Github Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                        <TooltipContent>
                          <p> Github Repo </p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: "16 / 9",
                      background: "transparent",
                      overflow: "hidden",
                    }}
                  >
                    {/* Image Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10 pointer-events-none" />
                    {/* Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider btn */}
              <WorkSliderBtn
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center items-center transition-all "
                iconsStyles="text-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
