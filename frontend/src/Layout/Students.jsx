import { Outlet, useNavigate } from "react-router-dom";
import { myaxiox } from "../api/AxioxClient";
import { useEffect } from "react";

export function Student() {
    const navigate = useNavigate();

     useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/auth/Login');
        }
    }, [navigate]);

    const handelLogout = async() => {
        await myaxiox.post('/logout')
        localStorage.removeItem('token')
        navigate('/')
    }
  return (
    <>
   <nav className="bg-white shadow-md px-6 py-4 flex justify-end">
    <button 
      onClick={handelLogout}
      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 12.59L7.41 13 10 10.41 7.41 7.83 9 6.41l4 4-4 4-1.41-1.41z" clipRule="evenodd" />
      </svg>
      Logout
    </button>
   </nav>
   <main><Outlet/></main>
    
    </>
  );
}