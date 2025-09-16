import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Netvara<span className="text-accent">.</span>
        </h1>
        {/* Desktop view Navbar & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href={"https://linkedin.com/in/FatngatirBilek"}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
