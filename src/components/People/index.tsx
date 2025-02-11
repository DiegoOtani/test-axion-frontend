import type { People } from "@/types/peoples";
import Card from "../Card";
import CardsContainer from "../CardsContainer";
import { fetchData } from "@/utils/fetchData";
import ErrorMessage from "../ErrorMessage";

const People = async() => {
  const response = await fetchData('/people');

  if("error" in response) return <ErrorMessage message="PEOPLES NOT FOUND."/>

  const data: People[] = await response.json();

  return (
    <CardsContainer>
      {data.map(people => (
        <Card 
          key={people.id} 
          title={people.name}
          img_url={`${process.env.BACKEND_API_URL}${people.link}`} 
          href={`/people/${people.id}`}
        />
      ))}
    </CardsContainer>
  )
}

export default People;