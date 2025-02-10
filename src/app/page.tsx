import { Suspense } from "react";
import Foods from "@/components/Foods";
import Loading from "@/components/Loading";
import ListTitle from "@/components/ListTitle";
import PagesContainer from "@/components/PagesContainer";

export default function FoodsPage() {
  return (
    <PagesContainer>
      <ListTitle title="LIST OF FOODS"/>
      
      <Suspense fallback={<Loading />}>
        <Foods />
      </Suspense>
    </PagesContainer>
  );
}
