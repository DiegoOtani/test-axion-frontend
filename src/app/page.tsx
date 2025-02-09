import { Suspense } from "react";
import Foods from "@/components/Foods";
import Loading from "@/components/Loading";
import ListTilte from "@/components/ListTitle";

export default function FoodsPage() {
  return (
    <section className="px-[17.36%] flex flex-col">
      <ListTilte title="FOODS"/>
      
      <Suspense fallback={<Loading />}>
        <Foods />
      </Suspense>
    </section>
  );
}
