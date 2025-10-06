import signupCover from "../../assets/images/signupCovre.png";
import { MdKey } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Input from "../../components/Input";

export default function SignUp() {


  return (
    <div className="flex h-screen ">
      <div className="w-1/2 content-center">
        <img
          className="h-[90vh] mx-auto "
          src={signupCover}
          alt="signupCover"
        />
      </div>
      <div className="w-1/2 flex flex-col  ">
        <div className="text-center w-5/6 ">
          <h1 className="text-5xl py-10 text-darkRed font-black">ایرانی فرش</h1>
          <h3 className="text-2xl text-darkRed-500 font-bold">ثبت نام</h3>
        </div>
        <div className="w-5/6 pt-4">

          <form action="#" className="flex flex-col">
            <Input inputType="text"  placeholder="نام" icon={FaUser }/>
            <Input inputType="text"  placeholder="خانوادگی" icon={FaUser}/>
            <Input inputType="password" placeholder="ساخت رمز عبور" icon={MdKey}/>
            <Input inputType="password" placeholder="تایید رمز عبور" icon={MdKey}/>
            <Input inputType="password"  placeholder='شماره تماس' icon={FaPhoneFlip}/>
          
            <button className="text-white bg-darkRed rounded-xl text-center py-2 mt-5 hover:cursor-pointer hover:bg-darkRed">
              ساخت حساب کاربری
            </button>
          </form>
          <p className="text-center pt-5">
            حساب کاربری دارید؟
            <span className=" text-darkRed hover:cursor-pointer">ورود </span>
            کنید
          </p>
        </div>
      </div>
    </div>
  );
}
