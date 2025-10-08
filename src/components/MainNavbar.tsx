import MainButton from "./MainButton";
import { login, cart, search } from "@/assets/icons";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  return (
    <>
      <div className=" w-full h-30 flex flex-col justify-between items-center pt-5">
        <div className=" w-full h-full flex justify-between ">
          <div className=" flex gap-5 h-full ">
            <MainButton Icon={login}>ورود/ثبت نام</MainButton>
            <MainButton Icon={cart}> </MainButton>
          </div>

          <div className=" h-full w-2/4  flex gap-8 items-center justify-end ">
            <div className=" h-full w-full">
              <SearchInput Icon={search} />
            </div>
            <div>
              <h1 className="text-3xl text-darkRed w-32  font-black">
                ایرانی فرش
              </h1>
            </div>
          </div>
        </div>
        <div className=" w-full h-full  flex justify-end mt-3">
          <ul className="flex items-center gap-9 text-lg font-lg">
            <li>
              <NavLink className={(link)=> link.isActive ? 'text-darkRed' : 'text-black'} to={"/About"}>درباره ما</NavLink>
            </li>
            <li>
              <NavLink className={(link)=> link.isActive ? 'text-darkRed' : 'text-black'} to={"/Contact"}>تماس با ما</NavLink>
            </li>
            <li>
              <NavLink className={(link)=> link.isActive ? 'text-darkRed' : 'text-black'} to={"/Weblog"}>وبلاگ</NavLink>
            </li>
            <li>
              <NavLink className={(link)=> link.isActive ? 'text-darkRed' : 'text-black'} to={"/"}>صفحه اصلی</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-inputBorder" />
    </>
  );
}
