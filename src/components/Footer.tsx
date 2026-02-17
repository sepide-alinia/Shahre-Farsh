import MainLayout from "@/layout/MainLayout";
import { Link } from "react-router-dom";
import telegram from "@/assets/images/telegram.png";
import linkdin from "@/assets/images/linkdin.png";
import instagram from "@/assets/images/instagram.png";

export default function Footer() {
  const footerCategory = [
    {
      header: "فرش های دستبافت",
      subHeader: [
        { title: "لوکس", to: "" },
        { title: "قدیمی", to: "" },
        { title: "مدرن", to: "" },
      ],
    },
    {
      header: "فرش های ماشینی",
      subHeader: [
        { title: "لوکس", to: "" },
        { title: "قدیمی", to: "" },
        { title: "مدرن", to: "" },
      ],
    },
    {
      header: "سایر فرش ها",
      subHeader: [
        { title: "لوکس", to: "" },
        { title: "قدیمی", to: "" },
        { title: "مدرن", to: "" },
      ],
    },
  ];

  return (
    <footer className=" h-[350px] w-full bg-footer  mt-30 text-right ">
      <MainLayout>
        <div className="flex gap-20">
          <div className=" flex justify-end text-right gap-10  w-full h-[85%] mt-8">
            {footerCategory.map((item) => (
              <div className=" w-full">
                <h1 className="text-xl font-bold border-b border-inputBorder w-full ">
                  {item.header}
                </h1>
                {item.subHeader.map((title) => (
                  <ul className="text-xl text-placeHolder mt-6">
                    <Link to={title.to}>{title.title}</Link>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className=" w-full h-[85%] mt-8">
            <div>
              <Link className="text-darkRed text-2xl font-bold" to={"/"}>
                ایرانی فرش
              </Link>
              <p className="pt-6 text-wrap text-lg/8 text-placeHolder">
                با ایرانی فرش همراه باشید و از زیبایی و شگفتی های فرش های متنوع
                و با کیفیت ما لذت ببرید. خرید آسان، تحویل سریع و خدمات پس از
                فروش حرفه ای، تنها چندی از ویژگی های خرید از ماست. با ایرانی فرش
                یک خرید آسان و لذت بخش را تجربه کنید.
              </p>
            </div>
            <div className="pt-7">
              <p className="font-normal text-xl text-placeHolder">
                تلفن پشتیبانی : ۰۲۱۳۳۳۳۳۳
              </p>
              <div className="flex gap-8 justify-end pt-5">
                <img className="hover:cursor-pointer" src={telegram}></img>
                <img className="hover:cursor-pointer" src={linkdin}></img>
                <img className="hover:cursor-pointer" src={instagram}></img>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </footer>
  );
}
