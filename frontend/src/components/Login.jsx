import { useState } from "react";
import { myaxiox } from "../api/AxioxClient";
import { Link } from "react-router-dom";

export function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await myaxiox.post('/login', { name, password });
      localStorage.setItem('token', response.data.token);
      setName('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      <Link to={'/admin'}><button type="submit">Se connecter</button></Link> 
     </form>
    </div>
  );
}


















































