import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Home() {
  // const navigate = useNavigate();
  // const token = localStorage.getItem('token'); 
  
  // useEffect(() => {
  //   if (!token) {
  //     return navigate('/auth/Login');
  //   }
  // }, [token, navigate]);
  return (
    <>
    <nav>
        <Link to={'/auth/Login'}>Login</Link>
        <Link to={'/auth/Register'}>Register</Link>
    </nav>
    <h1>hello In School </h1>
    </>
  );
}