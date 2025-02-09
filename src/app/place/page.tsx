import { Suspense } from "react";
import Places from "@/components/Places";
import Loading from "@/components/Loading";
import ListTitle from "@/components/ListTitle";
import PagesContainer from "@/components/PagesContainer";

const PeoplePage = () => {
  return(
    <PagesContainer>
      <ListTitle title="PEOPLE"/>

      <Suspense fallback={<Loading />}>
        <Places />
      </Suspense>
    </PagesContainer>
  )
};

export default PeoplePage;