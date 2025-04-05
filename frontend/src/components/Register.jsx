import { useState } from "react";
import { myaxiox } from "../api/AxioxClient";

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await myaxiox.post('/register', {name,email,role,password});
      setName('');
      setEmail('');
      setRole('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
<>
<form onSubmit={handleSubmit}>
  <label>Nom & Prenom</label>
  <input 
    type="text" 
    name="name" 
    value={name} 
    onChange={(e) => setName(e.target.value)}
  />
  <label>Email</label>
  <input 
    type="email" 
    name="email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <label>Role</label>
  <input 
    type="text" 
    name="role" 
    value={role}
    onChange={(e) => setRole(e.target.value)}
  />
  <label>Mot de passe</label>
  <input 
    type="password" 
    name="password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <input type="submit" value="Register"/>
</form>
</>
  );
}




















// import { myaxiox } from "../api/AxioxClient";
// import { useEffect, useState } from "react";

// export function Login() {
//     const [users, setusers] = useState([]);
    
//     useEffect(() => {
//         getusers();
//     }, []);
    
//     const getusers = async() => {
//       try {
//         const response = await myaxiox.get('/all');
//         console.log(response.data);
//         setusers(response.data.users || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
    
//   return (
//     <div>
//       <h1>Users List</h1>   
//       <div className="users-container">
//         {users.length > 0 ? (
//           users.map((user, index) => (
//             <div key={user.id || index} className="user-card">
//               <h3>{user.name}</h3>
//               <p>Email: {user.email}</p>
//             </div>
//           ))
//         ) : (
//           <p>No users found</p>
//         )}
//       </div>
//     </div>
//   );
// }