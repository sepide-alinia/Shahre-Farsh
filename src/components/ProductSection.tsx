import ProductCard from "./ProductCard";
import ProductNav from "./ProductNav";
import type { Product1Type } from "@/types";

type ProductSectionType={
    data : Product1Type
}

export default function ProductSection({data}: ProductSectionType) {


  return (
    <div className="h-screen my-10 ">
        <ProductNav title={'فرش های دستبافت'}/>
        <div className="h-10/12 mt-7 flex gap-7 mr-4">
            {data.map((item)=>(
                <ProductCard key={item.id} {...item} />
            ))}
        </div>
    </div>
  )
}
