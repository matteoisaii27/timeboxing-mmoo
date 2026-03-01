import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Planner from "./views/Planner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  );
}

export default App;

