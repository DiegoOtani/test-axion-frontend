import Card from "@/components/Card";
import DescriptionList from "@/components/DescriptionList";
import ErrorMessage from "@/components/ErrorMessage";
import ListTitle from "@/components/ListTitle";
import PagesContainer from "@/components/PagesContainer";
import { Place } from "@/types/places";
import { fetchData } from "@/utils/fetchData";

interface PlaceInfoProps {
  params: { id: string }
}

const PlaceInfoPage = async({ params }: PlaceInfoProps) => {
  const { id } = await params;

  const response = await fetchData(`/places/${id}`);

  if ("error" in response) return <ErrorMessage message="ERROR CONNECT TO SERVER. TRY AGAIN LATER."/>
  
  if(!response.ok) return <ErrorMessage message="PLACE NOT FOUND"/>

  const data: Place = await response.json();

  return(
    <PagesContainer>
      <ListTitle title={`${data.name} info`.toUpperCase()}/>
      <section className="flex justify-between">
        <Card 
          key={data.id}
          img_url={`${process.env.BACKEND_API_URL}${data.link}`}
          title={data.name}
        />

        <p className="text-md text-text break-words max-w-[35%]">{data.description}</p>

        <div>
          <DescriptionList 
            data={
              {
                Country: data.country,
                Language: data.language,
                Population: data.population
              }
            }
          />
        </div>
      </section>
    </PagesContainer>
    
  )
};

export default PlaceInfoPage;