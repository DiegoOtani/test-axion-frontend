import type { People } from "@/types/peoples";
import Card from "../Card";
import CardsContainer from "../CardsContainer";

const People = async() => {
  const response = await fetch(`${process.env.BACKEND_API_URL}/people`);
  
  if (!response.ok) {
    throw new Error("Error to search peoples.");
  }

  const data: People[] = await response.json();

  return (
    <CardsContainer>
      {data.map(people => (
        <Card 
          key={people.id} 
          title={people.name}
          img_url={`${process.env.BACKEND_API_URL}${people.link}`} 
        />
      ))}
    </CardsContainer>
  )
}

export default People;