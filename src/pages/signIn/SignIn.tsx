import Input from '../../components/Input'
import AuthLayout from '../../layout/AuthLayout'
import { FaPhoneFlip } from "react-icons/fa6";
import { MdKey } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
export default function SignIn() {
  return (
    <AuthLayout>
      <form className="flex flex-col">
       <Input inputType='text' placeholder='شماره موبایل' icon={FaPhoneFlip}/>
       <Input inputType='password' placeholder='رمز عبور ' icon={MdKey} show={IoEyeOffOutline} hide={MdOutlineRemoveRedEye}/>
        <Button>ورود</Button>
      </form>
      <p className="text-center pt-5">
         {" "} ثبت نام نکرده اید؟ همین الان  
        <Link to={"/SignUp"} className=" text-darkRed hover:cursor-pointer">
          {" "}عضو{" "}
        </Link>
        شوید
      </p>
    </AuthLayout>
  )
}
