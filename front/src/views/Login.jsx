import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Timeboxing App</h1>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
