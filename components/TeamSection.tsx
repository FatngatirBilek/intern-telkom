"use client";

import React from "react";
import Card from "./Card";

type TeamRole = "leader" | "member";
type TeamMember = {
  name: string;
  image: string;
  role: TeamRole;
};

const teamMembers: TeamMember[] = [
  { name: "Fathir Bima S", image: "/images/Fathir.jpg", role: "leader" },
  {
    name: "Ariefin Nur",
    image: "/images/Ariefin.jpeg",
    role: "member",
  },
  { name: "Respati Ajeng", image: "/images/Respati.jpeg", role: "member" },
  { name: "Khansa Fathi", image: "/images/Khansa.jpg", role: "member" },
  { name: "Nychen", image: "/images/Nychen.JPG", role: "member" },
];

import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
      }}
      className="w-full flex flex-col items-center py-1"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">
        Anggota Tim Kami
      </h2>
      {/* Baris atas: 3 card */}
      <div
        className="flex flex-row gap-0.5 justify-center items-center w-full max-w-5xl -mb-20
       flex-wrap
       sm:flex-nowrap"
      >
        {teamMembers.slice(0, 3).map((member, idx) => (
          <div
            key={idx}
            className="flex-1 flex justify-center min-w-[180px] px-0.5"
          >
            <Card name={member.name} image={member.image} role={member.role} />
          </div>
        ))}
      </div>
      {/* Baris bawah: 2 card */}
      <div
        className="flex flex-row gap-0.5 justify-center items-center w-full max-w-3xl
       flex-wrap
       sm:flex-nowrap"
      >
        {teamMembers.slice(3, 5).map((member, idx) => (
          <div
            key={idx}
            className="flex-1 flex justify-center min-w-[180px] px-0.5"
          >
            <Card name={member.name} image={member.image} role={member.role} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
