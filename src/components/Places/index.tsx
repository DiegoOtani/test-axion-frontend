import type { Place } from "@/types/places";
import Card from "../Card";
import CardsContainer from "../CardsContainer";
import { fetchData } from "@/utils/fetchData";

const Places = async() => {
  const response = await fetchData('/places');

  const data: Place[] = await response.json();

  return(
    <CardsContainer>
      {data.map(place => (
        <Card 
          key={place.id}
          title={place.name}
          img_url={`${process.env.BACKEND_API_URL}${place.link}`}
          href={`/place/${place.id}`}
        />
      ))}
    </CardsContainer>
  );
};

export default Places;