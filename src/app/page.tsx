import PriceCard from "@/components/PriceCard";
import { Hero1 } from "@/components/hero1";

export default function Home() {
  return (
    <section className="h-full">
      <div id="hero" className="container mx-auto h-full">
        <Hero1
          heading="Internet Cepat & Stabil untuk Keluarga Anda"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image={{
            src: "/images/indihome-hero.jpg",
            alt: "Internet Cepat & Stabil untuk Keluarga Anda",
          }}
        />
      </div>

      <div id="paket">
        <PriceCard />
      </div>
    </section>
  );
}
