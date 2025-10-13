import MainButton from "./MainButton";
import type {CategoryCardItem}  from "@/types";



export default function CategoryCard( {cardImg,title,btnText,toPage,id} :CategoryCardItem) {
  return <div className="overflow-hidden relative rounded-2xl ">
    <img src={cardImg} alt={title} className="absolute object-contain" />
    <div className="absolute"></div>
    <div className="absolute">
        <p>{title}</p>
        <MainButton toPage={toPage} extraClass="bg-none text-white border-white">{btnText}</MainButton>
    </div>
    </div>;
}
