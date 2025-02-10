"use client"

import { ButtonProps } from "./types";

const Button = ({ text, onClick, style, type }: ButtonProps) => {

  const defaultStyle = "text-text border border-placeholder";
  const gradientStyle = "bg-gradient-to-r from-primary_gradient to-second_gradient text-foreground";

  return <button 
    className={`w-full py-[18px] font-semibold text-md ${style === 'default' ? defaultStyle : gradientStyle} hover:opacity-85`}
      onClick={onClick}
      type={type}
    >
    {text}
  </button>
}

export default Button;