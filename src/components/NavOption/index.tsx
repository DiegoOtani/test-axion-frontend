import Link from "next/link";
import { NavOptionProps } from "./types";

const NavOption = ({ text, active, href }: NavOptionProps) => {
  return <li>
    <Link 
      className={`text-lg text-text ${active ? "font-bold" : "font-light"}`}
      href={href}
    >
      {text}
    </Link>
  </li>
};

export default NavOption;