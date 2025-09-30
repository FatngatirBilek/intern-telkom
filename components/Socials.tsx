import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Netvara" },
  { icon: <FaInstagram />, path: "https://instagram.com/Netvara" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/Netvara" },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
