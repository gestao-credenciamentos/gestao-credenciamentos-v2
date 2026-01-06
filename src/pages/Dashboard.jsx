import DashboardLayout from "../layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

function Card({ titulo, descricao, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        padding: 24,
        borderRadius: 12,
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h3>{titulo}</h3>
      <p style={{ color: "#555" }}>{descricao}</p>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      {/* CARDS DE NÚMEROS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        <Card titulo="Processos Abertos" descricao="3" />
        <Card titulo="Prestadores Ativos" descricao="22" />
        <Card titulo="Procedimentos" descricao="21" />
        <Card titulo="Credenciamentos" descricao="0" />
      </div>

      {/* MÓDULOS */}
      <h3 style={{ marginTop: 40 }}>Módulos</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        <Card
          titulo="Processos Licitatórios"
          descricao="Gerenciar processos de credenciamento"
          onClick={() => navigate("/processos")}
        />
        <Card
          titulo="Prestadores"
          descricao="Cadastrar e gerenciar prestadores"
          onClick={() => navigate("/prestadores")}
        />
        <Card
          titulo="Procedimentos Médicos"
          descricao="Procedimentos e especialidades"
          onClick={() => navigate("/procedimentos")}
        />
        <Card
          titulo="Credenciamentos"
          descricao="Vincular prestadores aos processos"
          onClick={() => navigate("/credenciamentos")}
        />
        <Card
          titulo="Cadastro Reserva"
          descricao="Gerenciar cadastro reserva"
        />
        <Card
          titulo="Relatórios"
          descricao="Relatórios por processo"
        />
        <Card
          titulo="Usuários"
          descricao="Gerenciar usuários do sistema"
          onClick={() => navigate("/usuarios")}
        />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
