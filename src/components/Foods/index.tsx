import type { Food } from "@/types/foods";
import Card from "../Card";
import CardsContainer from "../CardsContainer";
import { fetchData } from "@/utils/fetchData";
import ErrorMessage from "../ErrorMessage";

const Foods = async () => {

  const response = await fetchData('/foods');

  if("error" in response) return <ErrorMessage message="FOODS NOT FOUND."/>

  const data: Food[] = await response.json();

  return (
    <CardsContainer>
      {data.map((food) => (
        <Card 
          key={food.id} 
          title={food.name} 
          img_url={`${process.env.BACKEND_API_URL}${food.link}`} 
          href={`/foods/${food.id}`}
        />
      ))}
    </CardsContainer>
  );
};

export default Foods;
