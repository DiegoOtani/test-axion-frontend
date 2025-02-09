import type { Place } from "@/types/places";
import Card from "../Card";
import CardsContainer from "../CardsContainer";

const Places = async() => {
  const response = await fetch(`${process.env.BACKEND_API_URL}/places`);

  if (!response.ok) {
    throw new Error("Error to search places.");
  }

  const data: Place[] = await response.json();

  return(
    <CardsContainer>
      {data.map(place => (
        <Card 
          key={place.id}
          title={place.name}
          img_url={`${process.env.BACKEND_API_URL}${place.link}`}
        />
      ))}
    </CardsContainer>
  );
};

export default Places;