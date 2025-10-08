import {key,closedEye,openEye,user,phone} from '@/assets/icons'
import Input from "@/components/Input";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import AuthLayout from "@/layout/AuthLayout";
export default function SignUp() {
  return (
    <AuthLayout>
      <form action="#" className="flex flex-col">
        <Input inputType="text" placeholder="نام" Icon={user} />
        <Input inputType="text" placeholder="خانوادگی" Icon={user} />
        <Input
          inputType="password"
          placeholder="ساخت رمز عبور"
          Icon={key}
          Hide={closedEye}
          Show={openEye}
        />
        <Input
          inputType="password"
          placeholder="تایید رمز عبور"
          Icon={key}
          Hide={closedEye}
          Show={openEye}
        />
        <Input inputType="text" placeholder="شماره تماس" Icon={phone} />

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
