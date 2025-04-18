import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './Layout/AuthLayout'
import { Login } from './components/Auth/Login'
import { Register } from './components/Auth/Register'
import {Home} from './components/Home'
import { Student } from './Layout/Students'
import  Courses  from  './components/Student/Courses'
import {Admin} from './Layout/Admin'
import { Ajout } from './components/Admin/Category/Ajout'
import { Affiche } from './components/Admin/Category/Affiche'
import { Update } from './components/Admin/Category/Update'
import { Index } from './components/Admin/Courses/Index'
import { Create } from './components/Admin/Courses/Create'
import { Modifier } from './components/Admin/Courses/Modifier'
import { Dashboard } from './components/Admin/Dashboard'






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
    {
        path:'/Admin',
        element:<Admin/>,
        children:[
            {
                path:'',
                element:<Dashboard/>,
            },
            {
                path:'Categoryajout',
                element:<Ajout/>,
            },
            {
                path:'Categoryindex',
                element:<Affiche/>,
            },
            {
                path:'CategoryUpdate/:id',
                element:<Update/>,
            },
            {
                path:'CoursesIndex',
                element:<Index/>,
            },
            {
                path:'CoursesCreate',
                element:<Create/>,
            },
            {
                path:'CoursesUpdate/:id',
                element:<Modifier/>,
            },
        ]
    },
   
   



])