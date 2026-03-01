import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="cards">
        <div className="card"> Tareas completadas</div>
        <div className="card"> Bloques usados</div>
        <div className="card"> Próximas actividades</div>
      </div>
      <button onClick={() => navigate("/planner")} className="btn-primary">
        Ir al Planificador
      </button>
    </div>
  );
}
