import { InputProps } from "./types";
import Image from "next/image";

const InputArea = ({ name, placeholder, onChange, value, iconImg }: InputProps) => {
  return <section>
    <span>{name}</span>
    <div>
      <input 
        type="text" 
        name={name}
        value={value} 
        placeholder={placeholder} 
        onChange={onChange}
      />
      <Image 
        alt={name} 
        src={iconImg} 
        width={20}
        height={55}
      />
    </div>
  </section>
}

export default InputArea;