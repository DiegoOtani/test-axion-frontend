import { Suspense } from "react";
import Foods from "@/components/Foods";
import Loading from "@/components/Loading";
import ListTitle from "@/components/ListTitle";

export default function FoodsPage() {
  return (
    <section className="px-[17.36%] flex flex-col">
      <ListTitle title="FOODS"/>
      
      <Suspense fallback={<Loading />}>
        <Foods />
      </Suspense>
    </section>
  );
}
