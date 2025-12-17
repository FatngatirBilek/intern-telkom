"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links: { name: string; path: string }[] = [
  { name: "Beranda", path: "#hero" },
  // { name: "services", path: "#services" },
  { name: "Paket", path: "#paket" },
  // { name: "blog", path: "https://fathir.tjkt.web.id/blog/" },
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

export default function Navbar() {
  const pathname: string = usePathname();
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
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <a
          key={index}
          onClick={() => handleLinkClick(link, setActiveHash)}
          className={`${
            activeHash === link.path &&
            "text-text-primary border-b-2 border-accent"
          } capitalize font-medium hover:text-accent text-xl transition-all cursor-pointer`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
