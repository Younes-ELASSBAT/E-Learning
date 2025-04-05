import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useEffect  } from 'react'
// import {useNavigate} from 'react-router-dom'

export default function AuthLayout(){
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/auth/Login');
  // }, [navigate]);
  return (
    <>
    <nav>
        <Link to={'/auth/Login'}>Login</Link>
        <Link to={'/auth/Register'}>Register</Link>
    </nav>
    <main><Outlet/></main>
    <footer></footer>
    </>
  );
}
