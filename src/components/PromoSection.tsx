
import MainButton from "./MainButton"

type PromoSectionPropsType ={
src:string;
arrow?:string;
title: string;
highlight: string;
description: string;
primaryBtn :{
    toPage: string;
    extraClass: string;
    text: string;
}
secondryBtn? :{
    toPage: string;
    extraClass?: string;
    text: string;
}
}


export default function PromoSection({src,arrow,title,highlight,description,primaryBtn,secondryBtn}:PromoSectionPropsType) {
  return (

   <div className="flex h-11/12 w-full mt-24 ">
            <div className="relative h-full w-1/2 ">
              <img src={src} alt={src} />
            {arrow && 
             <img
             src={arrow}
             alt="arrow"
             className="absolute left-7 bottom-40"
             />
            } 
            </div>

            <div className="h-full w-1/2 text-center pt-20">
              <h1 className="font-bold text-[40px]">
               {title}{" "}
                <span className="text-darkRed">{highlight}</span>
              </h1>
              <p className="text-2xl font-semibold pt-7">
                {description}
              </p>

              <div className="flex justify-center gap-10 h-14 mt-16">
                <MainButton toPage={primaryBtn.toPage} extraClass={primaryBtn.extraClass}>{primaryBtn.text}</MainButton>
                {secondryBtn && (
                  <MainButton toPage={secondryBtn?.toPage} >{secondryBtn?.text}</MainButton>
                )}
              </div>
            </div>


    </div>
  )
}
