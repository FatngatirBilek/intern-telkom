import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stat from "@/components/Stat";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Work from "@/components/Work";
import Type from "@/components/Type";
import Spotify from "@/components/Spotify";

export default function Home() {
  return (
    <section className="h-full">
      <div id="hero" className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              <Type />
            </span>
            <h1 className="h1">
              Hello, I'm <br /> <span className="text-accent">Fathir</span>
            </h1>
            <p className="max-w[500px] mb-9 text-white">
              I excel at crafting elegant digital experiences and I am
              proficient in various technologies, including React, TypeScript,
              and Node.js.
            </p>
            {/* Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <FiDownload className="text-xl" />
                Download CV
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accnt rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div id="stat">
        <Stat />
      </div>
      {/* <div id="services">
        <Services />
      </div> */}
      <div id="resume">
        <Resume />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="spotify">
        <Spotify />
      </div>
    </section>
  );
}
