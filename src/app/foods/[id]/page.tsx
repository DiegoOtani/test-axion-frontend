import Card from "@/components/Card";
import DescriptionList from "@/components/DescriptionList";
import ListTitle from "@/components/ListTitle";
import PagesContainer from "@/components/PagesContainer";
import { Food } from "@/types/foods";
import { fetchData } from "@/utils/fetchData";

interface FoodInfoProps {
  params: { id: string }
}

const FoodInfoPage = async({ params }: FoodInfoProps) => {
  const { id } = await params;

  const response = await fetchData(`/foods/${id}`);

  if(!response.ok) return <p>Food not found</p>

  const data: Food = await response.json();

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
              { Category: data.category,
                Calories: `${data.calories} per 100g`,
                Cooking_time: data.cooking_time
              }
            }
          />
        </div>
      </section>
    </PagesContainer>
  )
};

export default FoodInfoPage;