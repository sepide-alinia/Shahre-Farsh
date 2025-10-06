import React from "react";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";

type InputProps = {
  inputType: string;
  placeholder: string;
  icon: React.ElementType;
};

export default function Input({
  inputType,
  placeholder,
  icon:Icon,
}: InputProps) {

  const [hidden,setHidden] =useState<boolean>(true)

  return (
    <div className=" group  flex items-center border mt-4 border-inputBorder focus-within:border-darkRed rounded-xl">
      { hidden? <MdOutlineRemoveRedEye className=" ml-7 hover:cursor-pointer fill-placeHolder" onClick={()=>setHidden?.(!hidden)}/> :
        <IoEyeOffOutline className=" ml-7 hover:cursor-pointer fill-placeHolder" onClick={()=>setHidden?.(!hidden)}/>
        }
      <input
        className={" w-10/12 bg-amber-400my-3 py-2 px-1 text-right  outline-none " }
        type={inputType}
        placeholder={placeholder}
      />
      <Icon className=" w-4 h-3 mr-3 fill-placeHolder" />
      </div>
  );
}
