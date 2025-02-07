import Image from "next/image";
import NavOption from "../NavOption";
import Link from "next/link";

const Header = () => {
  return <header className="flex py-7 px-[250px] items-center justify-between bg-foreground shadow-custom">
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
        <NavOption active={false} href="/" text="FOODS"/>
        <NavOption active={false} href="/" text="PEOPLE"/>
        <NavOption active={false} href="/" text="PLACES"/>
      </ul>
    </nav>
  </header>
}

export default Header;