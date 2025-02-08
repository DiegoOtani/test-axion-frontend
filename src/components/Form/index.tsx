"use client"

import loginAction from "@/actions/login";
import Image from "next/image";
import InputArea from "../InputArea";
import { useState } from "react";
import Button from "../Button";

const Form = () => {
  const [ showPassword, setShowPassword ] = useState<boolean>(false);
  const [ isRegistering, setIsRegistering ] = useState<boolean>(false);

  const handleLoginSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const email = formData.get('Email') as string;
    const password = formData.get('Password') as string;
    const response = await loginAction(email, password)

    if(response.error) return console.error(response.error)

    console.log(response)
  }

  const handleRegisterClick = () => {
    setIsRegistering(!isRegistering);
  }

  return <form className="bg-foreground shadow-custom p-12 max-w-[430px] flex flex-col gap-10"
    onSubmit={handleLoginSubmit}
  >
    <Image 
      className="w-[230px] h-auto"
      src={"/logo.png"} 
      alt="ORANGE logo" 
      width={230} 
      height={20}
    />
    <section className="flex flex-col gap-3">
      {isRegistering && (
        <InputArea 
          name="Username"
          placeholder="Your username"
        />
      )}
      <InputArea 
        iconImg="/mail.png"
        name="Email"
        placeholder="seunome@email.com"
      />
      <InputArea 
        iconImg="/lock.png"
        name="Password"
        placeholder="Password"
        showPassword={showPassword}
      />
      <div className="flex gap-3 items-center">
        <input 
          className="appearance-none w-4 h-4 border border-text checked:bg-placeholder checked:border-text cursor-pointer"
          type="checkbox" 
          id="showPassword"
          onChange={() => setShowPassword(!showPassword)}
          checked={showPassword}
        />
        <label className="text-text font-light text-md" htmlFor="showPassword">
          Mostrar a senha.
        </label>
      </div>

    </section>

    <span className="text-text font-semibold text-sm hover:cursor-pointer">
      Problemas para acessar sua conta?
    </span>

    <Button 
      key={"acess-button"}
      text={isRegistering ? "Cadastrar" : "Acessar"}
      style="gradient"
      type="submit"
    />

    <div className="flex items-center gap-2">
      <span className="flex-1 border-t border-placeholder"></span>
      <span className="text-center text-md text-text font-light">ou</span>
      <span className="flex-1 border-t border-placeholder"></span>
    </div>

    <Button 
      key={"register-button"}
      onClick={handleRegisterClick}
      style="default"
      text={isRegistering ? "Acessar" : "Cadastrar"}
      type="button"
    />

    <span className="text-text font-light text-sm">
      Termos de uso • Política de privacidade
    </span>
  </form>
}

export default Form;