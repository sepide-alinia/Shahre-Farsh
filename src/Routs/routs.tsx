import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import MainPage from "../pages/MainPage/MainPage";
import HomePage from "../pages/homePage/HomePage";
import AboutUs from "@/pages/aboutUs/AboutUs";
import ContactUs from "@/pages/contactUs/ContactUs";
import Weblog from "@/pages/weblog/Weblog";
import ShoppingCart from "@/pages/shoppingCart/ShoppingCart";
import Pdp from "@/pages/pdp/Pdp";

const routs = [
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/HomePage", element: <HomePage /> },
      { path: "/About", element: <AboutUs /> },
      { path: "/Contact", element: <ContactUs /> },
      { path: "/Weblog", element: <Weblog /> },
      { path: "/Shopping", element: <ShoppingCart /> },
      { path: "/Pdp/:id", element: <Pdp /> },
    ],
  },
  { path: "/SignIn", element: <SignIn /> },
  { path: "/SignUp", element: <SignUp /> },
];

export default routs;
