import { CardProps } from "./types";
import Image from "next/image";

const Card = ({ title, img_url }: CardProps) => {
  return <div className="relative w-[290px] h-[290px]">
    <Image className="w-full h-full"
      src={img_url} 
      alt={title}
      width={290}
      height={290}
    />
    <h2 className="absolute font-bold text-xl bottom-3 left-5 text-foreground ">
      {title}
    </h2>
  </div>
}

export default Card;