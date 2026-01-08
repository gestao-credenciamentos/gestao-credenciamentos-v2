import { HashRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login"; // 🔴 LOGIN CORRETO
import Dashboard from "./pages/Dashboard";
import Processos from "./pages/Processos";
import Prestadores from "./pages/Prestadores";
import Procedimentos from "./pages/Procedimentos";
import Credenciamentos from "./pages/Credenciamentos";
import CadastroReserva from "./pages/CadastroReserva";
import Relatorios from "./pages/Relatorios";
import Usuarios from "./pages/Usuarios";
import Unauthorized from "./pages/Unauthorized";

import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["admin", "operador"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/processos"
          element={
            <ProtectedRoute roles={["admin", "operador"]}>
              <Processos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/prestadores"
          element={
            <ProtectedRoute roles={["admin", "operador"]}>
              <Prestadores />
            </ProtectedRoute>
          }
        />

        <Route
          path="/procedimentos"
          element={
            <ProtectedRoute roles={["admin", "operador"]}>
              <Procedimentos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/credenciamentos"
          element={
            <ProtectedRoute roles={["admin", "operador"]}>
              <Credenciamentos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cadastro-reserva"
          element={
            <ProtectedRoute roles={["admin", "operador"]}>
              <CadastroReserva />
            </ProtectedRoute>
          }
        />

        <Route
          path="/relatorios"
          element={
            <ProtectedRoute roles={["admin", "operador"]}>
              <Relatorios />
            </ProtectedRoute>
          }
        />

        {/* 🔒 SOMENTE ADMIN */}
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute roles={["admin"]}>
              <Usuarios />
            </ProtectedRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </HashRouter>
  );
}
