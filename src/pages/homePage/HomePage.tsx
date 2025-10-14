import MainNavbar from "@/components/MainNavbar";
import MainLayout from "@/layout/MainLayout";
import carpet from "@/assets/images/carpet.png";
import arrow from "@/assets/images/arrow.png";
import PromoSection from "@/components/PromoSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";
import {productSectionItems1 as Product1Data}  from "@/data/productData"
import {productSectionItems2 as Product2Data}  from "@/data/productData"
import {category1Data}  from "@/data/CategoryData"
import {category2Data}  from "@/data/CategoryData"
import { useState } from "react";

export default function HomePage() {



  // const category2Data=[
  //   {id:1 , bg: '' , label: '' , buttonText:''},
  //   {id:2 , bg: '' , label: '' , buttonText:''},
  //   {id:3 , bg: '' , label: '' , buttonText:''},
  //   {id:4 , bg: '' , label: '' , buttonText:''},
  // ]

const [ProductData1] = useState(Product1Data)
const [ProductData2] = useState(Product2Data)
const [CategoryData1] = useState(category1Data)
const [CategoryData2] = useState(category2Data)

  return (
    <div>
      <MainLayout>
        <>
          <MainNavbar />
          <PromoSection
            src={carpet}
            arrow={arrow}
            title={"خرید راحت فرش، در"}
            highlight={"ایرانی فرش"}
            description={"  با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده و  از تنوع بی نظیر فرش ها لذت ببر"}
            primaryBtn={{toPage: "/SignUp", extraClass: 'redBtn' , text: 'عضویت در باشگاه مشتریان'}}
            secondaryBtn={{toPage: "/" , text: 'محصولات ویژه ایرانی فرش'}}
          />
          <CategoryGrid data={CategoryData1}/>
          <ProductSection data={ProductData1}/>
          <CategoryGrid data={CategoryData2}/>
          <ProductSection data={ProductData2}/>


        </>
      </MainLayout>
    </div>
  );
}
