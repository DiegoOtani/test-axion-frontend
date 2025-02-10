"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavOption from "../NavOption";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
          fixed top-0 left-0 w-full flex py-8 px-[250px] items-center justify-between bg-foreground duration-300 z-10 ${
        isScrolled ? "shadow-none border border-black border-opacity-10" : "shadow-custom border-none"
      }`}
    >
      <Link href={"/"}>
        <Image
          className="w-[230px] h-auto"
          alt="ORANGE logo"
          src={"/logo.png"}
          width={230}
          height={40}
          priority
        />
      </Link>
      <nav>
        <ul className="flex gap-14">
          <NavOption active={pathname === "/"} href="/" text="FOODS" />
          <NavOption active={pathname === "/people"} href="/people" text="PEOPLE" />
          <NavOption active={pathname === "/place"} href="/place" text="PLACES" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
