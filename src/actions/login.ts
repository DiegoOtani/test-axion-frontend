"use server";

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

  const data = await response.json()
  return data;
}

export default loginAction;