import React from "react";
import { useState } from "react";

type InputProps = {
  inputType: string;
  placeholder: string;
  Icon: React.ElementType;
  Show?: React.ElementType;
  Hide?: React.ElementType;
};

export default function Input({
  inputType,
  placeholder,
  Icon,
  Show,
  Hide,
}: InputProps) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className=" group  flex items-center border mt-4 border-inputBorder focus-within:border-darkRed rounded-input">
      {Hide &&
        Show &&
        (hidden ? (
          <Hide
            className="ml-7 hover:cursor-pointer fill-placeHolder"
            onClick={() => setHidden(!hidden)}
          />
        ) : (
          <Show
            className="ml-7 hover:cursor-pointer fill-placeHolder"
            onClick={() => setHidden(!hidden)}
          />
        ))}
      <input
        className={
          Hide && Show
            ? " w-[86%] bg-amber-400my-3 py-2 px-1 text-right  outline-none "
            : " w-[93%] bg-amber-400my-3 py-2 px-1 text-right  outline-none "
        }
        type={Hide && Show ? (hidden ? "tel" : "password") : inputType}
        placeholder={placeholder}
      />
      <Icon className=" w-4 h-3 mr-3 fill-placeHolder" />
    </div>
  );
}
