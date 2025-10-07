import SignUp from "../pages/signUp/SignUp"
import SignIn from "../pages/signIn/SignIn"
import HomePage from "../pages/homePage/HomePage"

const routs = [
    {path:'/SignUp' ,element : <SignUp/>},
    {path:'/SignIn', element: <SignIn/>},
    {path:'/', element: <HomePage/>}
]

export default routs