import MainButton from "./MainButton";
import { login, cart, search } from "@/assets/icons";
import SearchInput from "./SearchInput";
import { Link, NavLink } from "react-router-dom";

export default function MainNavbar() {
  const navbar = [
    { lable: "درباره ما", to: "/About" },
    { lable: " تماس با ما", to: "/Contact" },
    { lable: " وبلاگ", to: "/Weblog" },
    { lable: " صفحه اصلی", to: "/" },
  ];

  return (
    <>
      <div className=" w-full h-30 flex flex-col justify-between items-center pt-5">
        <div className=" w-full h-full flex justify-between ">
          <div className=" flex gap-5 h-full ">
            <MainButton Icon={login} toPage={"/SignIn"}>
              ورود/ثبت نام
            </MainButton>

            <MainButton toPage={"/Shopping"} Icon={cart}></MainButton>
          </div>

          <div className=" h-full w-2/4  flex gap-8 items-center justify-end ">
            <div className=" h-full w-full">
              <SearchInput Icon={search} />
            </div>
            <div>
              <h1 className="text-3xl text-darkRed w-32  font-black">
                <Link to={"/"}>ایرانی فرش</Link>
              </h1>
            </div>
          </div>
        </div>

        <nav className=" w-full h-full  flex justify-end mt-3">
          <ul className="flex items-center gap-9 text-lg ">
            {navbar.map(({ lable, to }) => (
              <li key={to}>
                <NavLink
                  className={(link) =>
                    link.isActive ? "text-darkRed" : "text-black"
                  }
                  to={to}
                >
                  {lable}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="text-inputBorder" />
    </>
  );
}
