import { Suspense } from "react";
import Places from "@/components/Places";
import Loading from "@/components/Loading";
import ListTitle from "@/components/ListTitle";

const PeoplePage = () => {
  return(
    <section className="px-[17.36%] flex flex-col">
      <ListTitle title="PEOPLE"/>

      <Suspense fallback={<Loading />}>
        <Places />
      </Suspense>
    </section>
  )
};

export default PeoplePage;