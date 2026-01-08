import { HashRouter, Routes, Route } from "react-router-dom";

/* PÁGINAS */
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Processos from "./pages/Processos";
import Prestadores from "./pages/Prestadores";
import Procedimentos from "./pages/Procedimentos";
import Credenciamentos from "./pages/Credenciamentos";
import CadastroReserva from "./pages/CadastroReserva";
import Relatorios from "./pages/Relatorios";
import Usuarios from "./pages/Usuarios";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* MÓDULOS */}
        <Route path="/processos" element={<Processos />} />
        <Route path="/prestadores" element={<Prestadores />} />
        <Route path="/procedimentos" element={<Procedimentos />} />
        <Route path="/credenciamentos" element={<Credenciamentos />} />
        <Route path="/cadastro-reserva" element={<CadastroReserva />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </HashRouter>
  );
}
