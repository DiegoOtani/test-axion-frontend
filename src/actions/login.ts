"use server";

import { cookies } from "next/headers";

const loginAction = async (email: string, password: string) => {

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
  })
  return data;
}

export default loginAction;