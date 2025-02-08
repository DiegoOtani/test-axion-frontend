"use server";

const loginAction = async (email: string, password: string) => {

  const response = await fetch(`${process.env.BACKEN_API_URL}/auth/local`, {
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
  console.log(data);
  return data;
}

export default loginAction;