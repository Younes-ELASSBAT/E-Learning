import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './Layout/AuthLayout'
import { Login } from './components/Login'
import { Register } from './components/Register'
import {Home} from './components/Home'



export const Router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'Login',
                element:<Login/>,
            },
            {
                path:'Register',
                element:<Register/>,
            }
        ]
    },
    
   



])