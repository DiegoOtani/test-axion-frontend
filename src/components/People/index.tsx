import type { People } from "@/types/peoples";
import Card from "../Card";
import CardsContainer from "../CardsContainer";
import { fetchData } from "@/utils/fetchData";

const People = async() => {
  const response = await fetchData('/people');

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