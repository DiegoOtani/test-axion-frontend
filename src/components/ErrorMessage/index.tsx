import { ErrorMessageProps } from "./types";

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <section className="flex justify-center items-center w-full h-[400px]">
      <p className="text-text font-bold">{message}</p>
    </section>
  )
}

export default ErrorMessage;