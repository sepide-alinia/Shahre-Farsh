import React from "react";

type InputProps = {
  eye?: React.ElementType;
  inputType: string;
  placeholder: string;
  icon: React.ElementType;
  setHidden?:React.Dispatch<React.SetStateAction<boolean>>;
  hidden?:boolean
};

export default function Input({
  eye:Eye,
  inputType,
  placeholder,
  icon:Icon,
  setHidden,
  hidden
}: InputProps) {
  return (
    <div className=" group  flex items-center border mt-4 border-inputBorder focus-within:border-darkRed rounded-xl">
      { Eye  && <Eye className=" ml-7 hover:cursor-pointer fill-placeHolder" onClick={()=>setHidden?.(!hidden)}/>}
      <input
        className={Eye ? " w-10/12 bg-amber-400my-3 py-2 px-1 text-right  outline-none " : " w-11/12 bg-amber-400my-3 py-2 px-1 text-right  outline-none "}
        type={inputType}
        placeholder={placeholder}
      />
      <Icon className=" w-4 h-3 mr-3 fill-placeHolder" />
      </div>
  );
}
