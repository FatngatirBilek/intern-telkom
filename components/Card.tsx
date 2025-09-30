"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type CardProps = {
  name?: string;
  image?: string;
  role?: "member" | "leader";
};

export default function Card({
  name = "Nama Anggota",
  image = "/images/Fathir.jpg",
  role = "member",
}: CardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white flex items-center gap-2"
        >
          {name}
        </CardItem>
        {role === "leader" && (
          <CardItem
            as="div"
            translateZ="60"
            className="text-black text-xs max-w-sm mt-2 px-2 py-1 bg-amber-500 rounded font-semibold w-fit"
          >
            Founder
          </CardItem>
        )}
        {role === "member" && (
          <CardItem
            as="div"
            translateZ="60"
            className="text-white text-xs max-w-sm mt-2 px-2 py-1 bg-blue-500 rounded font-semibold w-fit"
          >
            Dev Team
          </CardItem>
        )}
        <CardItem translateZ="100" className="w-full mt-2">
          <img
            src={image}
            height="960"
            width="540"
            className="aspect-[9/16] w-full h-72 object-cover object-top rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
