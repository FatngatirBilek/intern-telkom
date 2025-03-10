import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/FatngatirBilek" },
  { icon: <FaInstagram />, path: "https://instagram.com/fathirbimashabri" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/FatngatirBilek" },
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
