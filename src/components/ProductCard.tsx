import MainButton from "./MainButton";

type ProductCardType = {
  id: number;
  price: number;
  priceTag: string;
  img: string;
  description: string;
};

export default function ProductCard({
  id,
  img,
  description,
  price,
  priceTag,
}: ProductCardType) {
  return (
    <div className="h-[493px] w-full flex flex-col  items-center rounded-2xl border border-[#D9D9D9]">
      <div className="  my-7 ">
        <img src={img} />
      </div>

      <div className="w-5/6  text-right">
        <h1 className="font-semibold text-lg">{description}</h1>
        <div className="flex w-full h-10 mt-2  justify-between items-center ">
          <p>
            تومان{"  "} {priceTag}
          </p>
          <p> : قیمت </p>
        </div>
        <div className="h-10">
          <MainButton toPage={"/"} extraClass=" font-bold text-sm  ">
            مشاهده بیشتر
          </MainButton>
        </div>
      </div>
    </div>
  );
}
