import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './Layout/AuthLayout'
import { Login } from './components/Login'
import { Register } from './components/Register'
import {Home} from './components/Home'
import { AdminLayout } from './Layout/AdminLayout'
import { Allstudents } from './components/Students/Allstudents'



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
        path:'/admin',
        element:<AdminLayout/>,
        children:[
            {
                path:'Allstudents',
                element:<Allstudents/>

            },
            {
                // path:'',
                // element:
            }
        ]
    }
   



])