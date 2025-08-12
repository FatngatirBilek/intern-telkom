import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* title with logo as F */}
        <Link href={"/"} className="flex items-center gap-1">
          {/* Icon on the left */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
            className="w-90 h-90"
            style={{ marginRight: "-2px" }} // Pull text closer to logo
          />
        </Link>
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
