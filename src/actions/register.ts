"use server"

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
  return data;
}

export default registerAction;