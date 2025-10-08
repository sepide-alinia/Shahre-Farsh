import type React from "react";

type MainBtnType={
  children?: React.ReactNode;
  Icon?:React.ElementType
}

export default function MainButton({children,Icon}:MainBtnType) {
  return (<>
     <button className="flex items-center h-full hover:cursor-pointer gap-2 px-3  border border-darkRed text-darkRed font-semibold text-lg rounded-input">
      {children && children}
      {Icon && (
        <Icon className=" size-7 h-full" />
      )}
      </button>
      </>
  )
}
