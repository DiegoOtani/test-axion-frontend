import Card from "@/components/Card";
import DescriptionList from "@/components/DescriptionList";
import ListTitle from "@/components/ListTitle";
import PagesContainer from "@/components/PagesContainer";
import { People } from "@/types/peoples";
import { fetchData } from "@/utils/fetchData";

interface PeopleInfoProps {
  params: { id: string }
}

const PeopleInfoPage = async({ params }: PeopleInfoProps) => {
  const { id } = await params;

  const response = await fetchData(`/people/${id}`);

  if(!response.ok) return <p>People not found.</p>

  const data: People = await response.json();

  return(
    <PagesContainer>
      <ListTitle title={`${data.name} info`.toUpperCase()}/>
      <section className="flex justify-between">
        <Card 
          key={data.id}
          img_url={`${process.env.BACKEND_API_URL}${data.link}`}
          title={data.name}
        />

        <p className="text-md text-text break-words max-w-[35%]">{data.biography}</p>

        <div>
          <DescriptionList
            data={
              {
                Category: data.category,
                Nacionality: data.nationality,
                Birth_date: data.birth_date,
              }
            }
          />
        </div>
      </section>
    </PagesContainer>
  )
};

export default PeopleInfoPage;