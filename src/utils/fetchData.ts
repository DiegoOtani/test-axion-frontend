import { cookies } from "next/headers"

export const fetchData = async(endpoint: string) => {
  const cookiesStore = await cookies()
  const token = cookiesStore.get("jwt")?.value;

  const response = await fetch(`${process.env.BACKEND_API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}