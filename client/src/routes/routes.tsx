import App from "@/App"
import Home from "@/pages/home/Home"
import Login from "@/pages/Login"
import SignUp from "@/pages/SignUp"
import {createBrowserRouter} from "react-router"
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },{
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    },{
        path:"/home",
        element:<Home/>
    }
])

export default router