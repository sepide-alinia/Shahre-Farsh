import ProductCard from "./ProductCard";
import ProductNav from "./ProductNav";
import product1 from '@/assets/images/product1.png'
import product2 from '@/assets/images/product2.png'
import product3 from '@/assets/images/product3.png'
import product4 from '@/assets/images/product4.png'
export default function ProductSection() {

    const productSectionItems1=[
        {id:1,img: product1 ,description:'فرش کهن  دست بافت سهند زمینه سرمه ای ',price: 1_500_000,priceTag:'۱۵۰۰۰۰۰۰'},
        {id:2,img: product2 ,description:'فرش دست بافت زانیس  طرح ماربل زمینه نوک مدادی',price: 4_500_600_000, priceTag:'۴۵۰۰۰۰۰۰' },
        {id:3,img: product3 ,description:'فرش دست بافت نگین مشهد زمینه فیلی',price: 3_890_000_000, priceTag:'۳۸۹۰۰۰۰۰'},
        {id:4,img: product4 ,description:'فرش دست بافت نگین مشهد زمینه فیلی',price:10_990_000_000 ,  priceTag:'۱۰۹۹۰۰۰۰۰'},
    ]
        const productSectionItems2=[
        {id:1,img: product1 ,description:'فرش کهن  دست بافت سهند زمینه سرمه ای ',price: 1_500_000,priceTag:'۱۵۰۰۰۰۰۰'},
        {id:2,img: product2 ,description:'فرش دست بافت زانیس  طرح ماربل زمینه نوک مدادی',price: 4_500_600_000, priceTag:'۴۵۰۰۰۰۰۰' },
        {id:3,img: product3 ,description:'فرش دست بافت نگین مشهد زمینه فیلی',price: 3_890_000_000, priceTag:'۳۸۹۰۰۰۰۰'},
        {id:4,img: product4 ,description:'فرش دست بافت نگین مشهد زمینه فیلی',price:10_990_000_000 ,  priceTag:'۱۰۹۹۰۰۰۰۰'},
    ]

  return (
    <div className="h-screen">
        <ProductNav title={'فرش های دستبافت'}/>
        <div className="h-10/12 mt-7 flex gap-7 mr-4">
            {productSectionItems1.map((item)=>(
                <ProductCard key={item.id} {...item} />
            ))}
        </div>
    </div>
  )
}
