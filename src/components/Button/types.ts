export type ButtonProps = {
  text: string;
  onClick: () => void;
  style: "default" | "gradient";
  type: "button" | "submit"
};