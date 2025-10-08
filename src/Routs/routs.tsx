import SignUp from "../pages/signUp/SignUp"
import SignIn from "../pages/signIn/SignIn"
import HomePage from "../pages/homePage/HomePage"
import AboutUs from "@/pages/aboutUs/AboutUs"
import ContactUs from "@/pages/contactUs/ContactUs"
import Weblog from "@/pages/weblog/Weblog"

const routs = [
    {path:'/', element: <HomePage/>},
    {path:'/SignUp' ,element : <SignUp/>},
    {path:'/SignIn', element: <SignIn/>},
    {path:'/About', element: <AboutUs/>},
    {path:'/Contact', element: <ContactUs/>},
    {path:'/Weblog', element: <Weblog/>},
]

export default routs