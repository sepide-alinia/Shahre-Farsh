import type React from "react";
import { Link } from "react-router-dom";

type MainBtnType = {
  children?: React.ReactNode;
  Icon?: React.ElementType;
  toPage: string;
  extraClass?: string
};

export default function MainButton({ children, Icon, toPage,extraClass="" }: MainBtnType) {
  return (
    <>
      <Link
        to={toPage}
        className= {` flex items-center justify-center h-full hover:cursor-pointer gap-2 px-3  border border-darkRed text-darkRed font-semibold text-lg rounded-input ${extraClass}`}  
      >
        {children && children}
        {Icon && <Icon className=" size-7 h-full" />}
      </Link>
    </>
  );
}
