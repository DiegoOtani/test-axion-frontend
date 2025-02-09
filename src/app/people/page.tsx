import ListTitle from "@/components/ListTitle";
import Loading from "@/components/Loading";
import People from "@/components/People";
import { Suspense } from "react";

const PeoplePage = () => {
  return (
    <section className="px-[17.36%] flex flex-col">
      <ListTitle title="PEOPLE"/>

      <Suspense fallback={<Loading />}>
        <People />
      </Suspense>
    </section>
  )
} 

export default PeoplePage;