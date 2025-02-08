import Form from "@/components/Form";
import Image from "next/image";

const Login = () => {
  return <div className="pl-[12.5%] pt-[4.8%] relative w-full h-screen">
    <Image 
      className="absolute right-0 top-[22.5%] object-cover z-[-1] "
      alt="background image with a computer in a desktop"
      src={"/bg.jpg"}
      width={860}
      height={444}
      priority
    />
    <Form />
  </div>
}

export default Login;