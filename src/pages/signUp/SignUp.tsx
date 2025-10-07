import { MdKey } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Input from "../../components/Input";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import AuthLayout from "../../layout/AuthLayout";
export default function SignUp() {
  return (
    <AuthLayout>
      <form action="#" className="flex flex-col">
        <Input inputType="text" placeholder="نام" icon={FaUser} />
        <Input inputType="text" placeholder="خانوادگی" icon={FaUser} />
        <Input
          inputType="password"
          placeholder="ساخت رمز عبور"
          icon={MdKey}
          hide={MdOutlineRemoveRedEye}
          show={IoEyeOffOutline}
        />
        <Input
          inputType="password"
          placeholder="تایید رمز عبور"
          icon={MdKey}
          hide={MdOutlineRemoveRedEye}
          show={IoEyeOffOutline}
        />
        <Input inputType="text" placeholder="شماره تماس" icon={FaPhoneFlip} />

        <Button>ساخت حساب کاربری</Button>
      </form>
      <p className="text-center pt-5">
        حساب کاربری دارید؟
        <Link to={"/SignIn"} className=" text-darkRed hover:cursor-pointer">
          ورود{" "}
        </Link>
        کنید
      </p>
    </AuthLayout>
  );
}
