import Image from "next/image";
import NavOption from "../NavOption";

const Header = () => {
  return <header>
    <Image
      className="w-[230px] h-10" 
      alt="ORANGE logo" 
      src={"/logo.png"} 
      width={230} 
      height={44} 
      priority
    />
    <nav>
      <ul>
        <NavOption active={false} href="/" text="FOODS"/>
        <NavOption active={false} href="/" text="PEOPLE"/>
        <NavOption active={false} href="/" text="PLACES"/>
      </ul>
    </nav>
  </header>
}

export default Header;