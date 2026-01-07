import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

function Card({
  icone,
  corIcone,
  titulo,
  descricao,
  onClick,
  destaque,
  tipo = "numero",
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#ffffff",
        padding: 28,
        borderRadius: 16,
        cursor: onClick ? "pointer" : "default",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease",
        border: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.08)";
      }}
    >
      {/* ÍCONE */}
      {icone && (
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: corIcone,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          {icone}
        </div>
      )}

      {/* TEXTO */}
      {tipo === "numero" ? (
        <>
          <span style={{ fontSize: 14, color: "#6b7280" }}>
            {titulo}
          </span>
          <strong
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: destaque || "#0d47a1",
            }}
          >
            {descricao}
          </strong>
        </>
      ) : (
        <>
          {/* TÍTULO GRANDE (AÇÃO) */}
          <h3
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 700,
              color: "#0d47a1",
            }}
          >
            {titulo}
          </h3>

          {/* DESCRIÇÃO MENOR */}
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: "#6b7280",
              lineHeight: 1.5,
            }}
          >
            {descricao}
          </p>
        </>
      )}
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      {/* ================= INDICADORES ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}
      >
        <Card
          icone="📄"
          corIcone="#dbeafe"
          titulo="Processos Abertos"
          descricao="3"
          destaque="#0d47a1"
        />
        <Card
          icone="🏥"
          corIcone="#dcfce7"
          titulo="Prestadores Ativos"
          descricao="22"
          destaque="#16a34a"
        />
        <Card
          icone="🧬"
          corIcone="#ede9fe"
          titulo="Procedimentos"
          descricao="21"
          destaque="#7c3aed"
        />
        <Card
          icone="👥"
          corIcone="#fee2e2"
          titulo="Credenciamentos"
          descricao="0"
          destaque="#dc2626"
        />
      </div>

      {/* ================= MÓDULOS ================= */}
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>
        Módulos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        <Card
          tipo="modulo"
          icone="📄"
          corIcone="#dbeafe"
          titulo="Gerenciar processos de credenciamento"
          descricao="Processos Licitatórios"
          onClick={() => navigate("/processos")}
        />

        <Card
          tipo="modulo"
          icone="🏥"
          corIcone="#dcfce7"
          titulo="Cadastrar e gerenciar prestadores"
          descricao="Prestadores"
        />

        <Card
          tipo="modulo"
          icone="🧬"
          corIcone="#ede9fe"
          titulo="Procedimentos e especialidades"
          descricao="Procedimentos Médicos"
        />

        <Card
          tipo="modulo"
          icone="👥"
          corIcone="#ffedd5"
          titulo="Vincular prestadores aos processos"
          descricao="Credenciamentos"
        />

        <Card
          tipo="modulo"
          icone="🗂️"
          corIcone="#ede9fe"
          titulo="Gerenciar cadastro reserva"
          descricao="Cadastro Reserva"
        />

        <Card
          tipo="modulo"
          icone="📊"
          corIcone="#fce7f3"
          titulo="Relatórios por processo"
          descricao="Relatórios"
        />

        <Card
          tipo="modulo"
          icone="👤"
          corIcone="#dbeafe"
          titulo="Gerenciar usuários do sistema"
          descricao="Usuários"
        />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
