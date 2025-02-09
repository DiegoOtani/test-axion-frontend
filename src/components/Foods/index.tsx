import { Food } from "@/types/foods";
import Card from "../Card";
import CardsContainer from "../CardsContainer";

const Foods = async() => {
  const response = await fetch(`${process.env.BACKEND_API_URL}/foods`);

  if (!response.ok) {
    throw new Error("Erro ao buscar os alimentos");
  }

  const data: Food[] = await response.json();

  return (
    <CardsContainer>
      {data.map((food) => (
        <Card img_url={`${process.env.BACKEND_API_URL}${food.link}`} title={food.name} key={food.id} />
      ))}
    </CardsContainer>
  );
}

export default Foods;