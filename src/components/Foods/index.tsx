import type { Food } from "@/types/foods";
import Card from "../Card";
import CardsContainer from "../CardsContainer";

const Foods = async() => {
  const response = await fetch(`${process.env.BACKEND_API_URL}/foods`);

  if (!response.ok) {
    throw new Error("Error to search foods.");
  }

  const data: Food[] = await response.json();

  return (
    <CardsContainer>
      {data.map((food) => (
        <Card 
          key={food.id} 
          title={food.name} 
          img_url={`${process.env.BACKEND_API_URL}${food.link}`} 
        />
      ))}
    </CardsContainer>
  );
}

export default Foods;