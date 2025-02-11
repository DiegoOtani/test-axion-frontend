"use server";

import { cookies } from "next/headers";

const loginAction = async (email: string, password: string) => {

  try {
    const response = await fetch(`${process.env.BACKEND_API_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        identifier: email,
        password 
      })
    })
  
    if(!response.ok) return { error: "Usuário ou senha incorretos!"};
  
    const data = await response.json();
  
    (await cookies()).set("jwt", data.jwt, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
    });
  
    (await cookies()).set("user", JSON.stringify(data.user), {
      httpOnly: false,
      path: "/",
      maxAge: 60 * 60,
    });
  
    return data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { error: "Não foi possível conectar ao servidor. Tente novamente mais tarde." };
  }

  
}

export default loginAction;