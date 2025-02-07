import Link from "next/link";
import { NavOptionProps } from "./types";

const NavOption = ({ text, active, href }: NavOptionProps) => {
  return <li>
    <Link href={href}>
      {text}
    </Link>
  </li>
};

export default NavOption;