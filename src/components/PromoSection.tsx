
import MainButton from "./MainButton"

import type { PromoSectionPropsType } from "@/types"


export default function PromoSection({src,arrow,title,highlight,description,primaryBtn,secondaryBtn,extraClass1=""} : PromoSectionPropsType) {
  return (

   <div className= 'flex h-11/12 w-full my-24'  >
            <div className="relative h-fit overflow-hidden w-1/2 ">
              <img className="h-full" src={src} alt={src} />
            {arrow && 
             <img
             src={arrow}
             alt="arrow"
             className="absolute left-7 bottom-75"
             />
            } 
            </div>

          <div className= {`h-full w-1/2 text-center pt-20 ${extraClass1}`}>
              <h1 className="font-bold text-[40px]">
               {title}{" "}
                <span className="text-darkRed">{highlight}</span>
              </h1>
              <p className="text-2xl font-normal pt-7">
                {description}
              </p>

              <div className="flex justify-center gap-10 h-14 mt-16">
                <MainButton toPage={primaryBtn.toPage} extraClass={primaryBtn.extraClass}>{primaryBtn.text}</MainButton>
                {secondaryBtn && (
                <MainButton toPage={secondaryBtn.toPage} >{secondaryBtn?.text}</MainButton>
                )}
              </div>
            </div>


    </div>
  )
}
