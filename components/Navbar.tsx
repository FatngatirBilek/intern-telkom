"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links: { name: string; path: string }[] = [
  { name: "home", path: "#hero" },
  // { name: "services", path: "#services" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
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
          onClick={() => {
            scrolltoHash(link.path.replace("#", ""));
            setActiveHash(link.path);
          }}
          className={`${
            activeHash === link.path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all cursor-pointer`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
