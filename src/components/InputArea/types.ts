export type InputProps = {
  name: string;
  placeholder: string;
  iconImg: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  showPassword?: boolean;
};