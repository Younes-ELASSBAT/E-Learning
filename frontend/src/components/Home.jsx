import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
    <nav>  <Link to={'/auth/Login'}>Login</Link>
    <Link to={'/auth/Register'}>Register</Link></nav>
    <h1>hello In School </h1>
    </>
  );
}