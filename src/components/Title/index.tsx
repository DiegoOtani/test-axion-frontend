import { TitleProps } from "./types";

const Title = ({ text }: TitleProps) => {
  return <h1 className="text-xll font-bold text-text font-title tracking-[14px]">
    {text}
  </h1>
}

export default Title;