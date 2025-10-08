import React from "react";

export default function SearchInput({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-2 p-2 w-full h-full  bg-searchInput rounded-input text-placeHolder ">
      <input
        type="text"
        placeholder="جستجو فرش"
        className="h-full font-semibold w-full outline-none text-right "
      />
      <Icon className="size-6" />
    </div>
  );
}
