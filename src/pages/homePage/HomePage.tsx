import MainNavbar from "@/components/MainNavbar";
import MainLayout from "@/layout/MainLayout";
import PromoSection from "@/components/PromoSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";
import { productSectionItems1 as Product1Data } from "@/data/productData";
import { productSectionItems2 as Product2Data } from "@/data/productData";
import { promo1Data } from "@/data/promoSectionData";
import { promo2Data } from "@/data/promoSectionData";
import { category1Data } from "@/data/CategoryData";
import { category2Data } from "@/data/CategoryData";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [ProductData1] = useState(Product1Data);
  const [ProductData2] = useState(Product2Data);
  const [CategoryData1] = useState(category1Data);
  const [CategoryData2] = useState(category2Data);
  const [promoData1] = useState(promo1Data);
  const [promoData2] = useState(promo2Data);

  return (
    <div>
      <MainLayout>
        <>
          <MainNavbar />
          <PromoSection {...promoData1} />
          <CategoryGrid data={CategoryData1} />
          <ProductSection data={ProductData1} />
          <CategoryGrid data={CategoryData2} />
          <ProductSection data={ProductData2} />
          <PromoSection {...promoData2 } />
          <Footer/>
        </>
      </MainLayout>
    </div>
  );
}
