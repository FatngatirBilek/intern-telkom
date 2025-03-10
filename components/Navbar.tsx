"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { name: string; path: string }[] = [
  {
    name: "home",
    path: "#hero",
  },
  {
    name: "services",
    path: "#services",
  },
  {
    name: "resume",
    path: "#resume",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
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

  return (
    <nav className="flex gap-8">
      {links.map((link: { name: string; path: string }, index) => (
        <a
          key={index}
          onClick={() => scrolltoHash(link.path.replace("#", ""))}
          className={`${
            pathname === link.path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all cursor-pointer`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
