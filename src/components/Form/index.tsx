"use client"

import Image from "next/image";
import InputArea from "../InputArea";
import { useState } from "react";
import Button from "../Button";

const Form = () => {
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ showPassword, setShowPassword ] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return <form className="bg-foreground shadow-custom p-12 max-w-[430px] flex flex-col gap-10">
    <Image 
      className="w-[230px] h-auto"
      src={"/logo.png"} 
      alt="ORANGE logo" 
      width={230} 
      height={20}
    />
    <section className="flex flex-col gap-3">
      <InputArea 
        iconImg="/mail.png"
        name="Email"
        placeholder="seunome@email.com"
        onChange={handleEmailChange}
        value={email}
      />
      <InputArea 
        iconImg="/lock.png"
        name="Password"
        placeholder="Password"
        onChange={handlePasswordChange}
        value={password}
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
      text="Acessar"
      onClick={() => console.log("Botão de acessar")}
      style="gradient"
    />

    <div className="flex items-center gap-2">
      <span className="flex-1 border-t border-placeholder"></span>
      <span className="text-center text-md text-text font-light">ou</span>
      <span className="flex-1 border-t border-placeholder"></span>
    </div>

    <Button 
      key={"register-button"}
      onClick={() => console.log("Botão de registrar")}
      style="default"
      text="Cadastrar"
    />

    <span className="text-text font-light text-sm">
      Termos de uso • Política de privacidade
    </span>
  </form>
}

export default Form;