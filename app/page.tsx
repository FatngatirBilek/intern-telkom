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
import Card from "@/components/Card";
import TeamSection from "@/components/TeamSection";
import PriceCard from "@/components/PriceCard";
import { Hero1 } from "@/components/hero1";
import heroimg from "@/public/images/indihome-hero.jpg";
export default function Home() {
  return (
    <section className="h-full">
      <div id="hero" className="container mx-auto h-full">
        <Hero1
          heading="Internet Cepat & Stabil untuk Keluarga Anda"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image={{
            src: heroimg.src,
            alt: "Internet Cepat & Stabil untuk Keluarga Anda",
          }}
        />
      </div>

      <div id="work">
        <Work />
      </div>
      <div id="card">
        <PriceCard />
      </div>
      <div id="card">
        <TeamSection />
      </div>
      {/*<div id="spotify">
        <Spotify />
      </div>*/}
    </section>
  );
}
