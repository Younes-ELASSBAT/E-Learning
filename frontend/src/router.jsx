import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './Layout/AuthLayout'
import { Login } from './components/Auth/Login'
import { Register } from './components/Auth/Register'
import {Home} from './components/Home'
import { Student } from './Layout/Students'
import  Courses  from  './components/Student/Courses'





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
    {
        path:'/Student',
        element:<Student/>,
        children:[
            {
                path:'Courses',
                element:<Courses/>,
            },
           
        ]
    },
   
   



])