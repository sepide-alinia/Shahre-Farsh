import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productSectionItems1 as productData1 } from "@/data/productData";
import { productSectionItems2 as productData2 } from "@/data/productData";
import PdpFeaturesCard from "@/components/PdpFeaturesCard";

export default function Pdp() {
  let params = useParams();

  let allData = [...productData1, ...productData2];
  let data = allData.find((product) => product.id == Number(params.id));
  const [currentProduct] = useState(data);

  return (
    <div className="flex flex-row-reverse justify-between gap-10  mt-20 ">
      <div className="w-1/3 h-1/3 bg-amber-300">
        <img  src={currentProduct?.img}  />
      </div>

      <div className="w-1/3 text-right ">
        <h1 className="font-bold text-2xl pb-2 border-b-2 border-placeHolder">{currentProduct?.description}</h1>
        <h3 className="font-bold pt-5">اندازه فرش : {currentProduct?.size}</h3>
        <p className="font-bold pt-5">:ویژگی ها </p>
        <div className="grid grid-cols-2 gap-3 mt-14">
        
        

        <PdpFeaturesCard {...currentProduct?.traits}/>

        </div>
      </div>


      <div className="w-1/4 bg-amber-300">tai</div>
    </div>
  );
}
