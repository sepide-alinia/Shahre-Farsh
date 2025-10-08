import {key,closedEye,openEye,phone} from '@/assets/icons'
import Input from '../../components/Input'
import AuthLayout from '../../layout/AuthLayout'
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
export default function SignIn() {
  return (
    <AuthLayout>
      <form className="flex flex-col">
       <Input inputType='text' placeholder='شماره موبایل' Icon={phone}/>
       <Input inputType='password' placeholder='رمز عبور ' Icon={key} Show={openEye} Hide={closedEye}/>
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
