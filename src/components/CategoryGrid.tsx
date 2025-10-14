import CategoryCard from "./CategoryCard";
import type { CategoryCardType } from "@/types";

type CategoryGrid={
data : CategoryCardType
}

export default function CategoryGrid({data}:CategoryGrid) {

 
  return (
    <div className="h-72 grid grid-cols-3 gap-6 my-5 ">
     
      <div className=" grid grid-row-2 gap-6 rounded-2xl  ">
        <CategoryCard {...data[3]}  />
        <CategoryCard {...data[2]}  />
      </div>

        <CategoryCard {...data[1]}  />
        <CategoryCard {...data[0]}  />

    </div>
  );
}
