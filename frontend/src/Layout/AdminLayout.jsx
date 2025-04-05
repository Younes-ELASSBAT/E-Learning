import { Link, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
<>
<nav>
    <Link to={'/admin/Allstudents'}>Allstudents</Link>
   
</nav>
<main><Outlet/></main>
<footer></footer>
</>
);
}