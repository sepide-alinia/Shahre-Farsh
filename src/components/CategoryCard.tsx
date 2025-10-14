import MainButton from "./MainButton";
import type {CategoryCardItem}  from "@/types";



export default function CategoryCard( {cardImg,title,btnText,toPage,id} :CategoryCardItem) {
  return <div className="overflow-hidden relative rounded-2xl ">
    <img src={cardImg} alt={title} className="absolute object-contain" />
    <div className="absolute h-full w-full  bg-linear-to-r from-gray-500/10 to-gray-900/50"></div>
    <div className="absolute right-5 bottom-5">
        <p className="text-right font-semibold text-xl text-white mb-2">{title}</p>
        <div className="h-12">
        <MainButton toPage={toPage} extraClass="bg-none text-white border-white">{btnText}</MainButton>
        </div>
    </div>
    </div>;
}
