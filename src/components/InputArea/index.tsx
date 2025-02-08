import { InputProps } from "./types";
import Image from "next/image";

const InputArea = ({ name, placeholder, iconImg, showPassword = true }: InputProps) => {
  return <section className="flex flex-col gap-2">
    <span className="text-md font-semibold text-text">
      {name}
    </span>
    <div className="flex py-[18px] px-5 border border-text ">
      <input 
        className="w-full placeholder:text-placeholder text-text text-md font-light"
        type={showPassword ? "text" : "password"} 
        name={name}
        placeholder={placeholder} 
        autoComplete={showPassword ? 'current-password' : ''}
      />
      {iconImg && (
        <Image className="w-5 h-5"
          alt={name} 
          src={iconImg} 
          width={20}
          height={20}
        />
      )}
    </div>
  </section>
}

export default InputArea;