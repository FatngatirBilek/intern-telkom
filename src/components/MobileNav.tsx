"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links: { name: string; path: string }[] = [
  { name: "home", path: "#hero" },
  // { name: "services", path: "#services" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "blog", path: "https://fathir.tjkt.web.id/blog/" },
  // { name: "contact", path: "#contact" },
];

const scrolltoHash = (element_id: string) => {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const handleLinkClick = (
  link: { name: string; path: string },
  setActiveHash: (hash: string) => void,
) => {
  if (link.path.startsWith("http")) {
    // External link - open in new tab
    window.open(link.path, "_blank");
  } else {
    // Hash link - scroll to element
    scrolltoHash(link.path.replace("#", ""));
    setActiveHash(link.path);
  }
};

export default function MobileNav() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial hash

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-white">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Fathir<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              onClick={() => handleLinkClick(link, setActiveHash)}
              className={`${
                activeHash === link.path &&
                "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all cursor-pointer`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
