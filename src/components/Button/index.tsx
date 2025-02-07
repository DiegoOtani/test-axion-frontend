"use client"

import { ButtonProps } from "./types";

const Button = ({ text, onClick, style }: ButtonProps) => {

  const defaultStyle = "text-text border border-placeholder-1";
  const gradientStyle = "bg-gradient-to-r from-primary_gradient to-second_gradient text-foreground";

  return <button 
    className={`w-full py-[18px] font-semibold text-md font-text ${style === 'default' ? defaultStyle : gradientStyle} hover:opacity-85`}
      onClick={onClick}
    >
    {text}
  </button>
}

export default Button;