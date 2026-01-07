import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import Processos from "./pages/Processos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Processos Licitatórios */}
        <Route path="/processos" element={<Processos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
