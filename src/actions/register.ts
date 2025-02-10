"use server"

import { cookies } from "next/headers";

const registerAction = async(username: string, email: string, password: string) => {
  
  const response = await fetch(`${process.env.BACKEND_API_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })

  if(!response.ok) return { error: "Informações inválidas." };

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
}

export default registerAction;