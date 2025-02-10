import ListTitle from "@/components/ListTitle";
import Loading from "@/components/Loading";
import People from "@/components/People";
import { Suspense } from "react";
import PagesContainer from "@/components/PagesContainer";

const PeoplePage = () => {
  return (
    <PagesContainer>
      <ListTitle title="LIST OF PEOPLE"/>

      <Suspense fallback={<Loading />}>
        <People />
      </Suspense>
    </PagesContainer>
  )
} 

export default PeoplePage;