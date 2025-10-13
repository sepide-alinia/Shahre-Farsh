import CategoryCard from "./CategoryCard";
import carpet1 from '@/assets/images/carpet1.png'
import carpet2 from '@/assets/images/carpet2.png'
import carpet3 from '@/assets/images/carpet3.png'
import carpet4 from '@/assets/images/carpet4.png'
export default function CategoryGrid() {

  const category1Data=[
    {id:1 , cardImg: carpet1 , title: 'فرش های جدید' , btnText:'مشاهده و خرید',toPage:'/'},
    {id:2 , cardImg: carpet2 , title: 'فرش های رنگارنگ' , btnText:'مشاهده و خرید',toPage:'/'},
    {id:3 , cardImg: carpet3 , title: 'پادری دستبافت' , btnText:'مشاهده و خرید',toPage:'/'},
    {id:4 , cardImg: carpet4 , title: 'موکت اتاق' , btnText:'مشاهده و خرید',toPage:'/'},
  ]
  return (
    <div className="h-72 grid grid-cols-3 gap-6  ">
     
      <div className=" grid grid-row-2 gap-6 rounded-2xl bg-amber-400 ">
        <CategoryCard {...category1Data[3]}  />
        <CategoryCard {...category1Data[2]}  />
      </div>

        <CategoryCard {...category1Data[1]}  />
        <CategoryCard {...category1Data[0]}  />

    </div>
  );
}
