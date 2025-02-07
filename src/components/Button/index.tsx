"use client"

import { ButtonProps } from "./types";

const Button = ({ text, onClick, style }: ButtonProps) => {
  return <button 
    className={``}
      onClick={onClick}
    >
    {text}
  </button>
}

export default Button;