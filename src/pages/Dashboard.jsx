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
        border: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
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
          <h3 style={{ margin: 0, fontSize: 18, color: "#0d47a1" }}>
            {titulo}
          </h3>
          <p style={{ margin: 0, fontSize: 14, color: "#6b7280" }}>
            {descricao}
          </p>
        </>
      )}
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}
      >
        <Card titulo="Processos Abertos" descricao="3" />
        <Card titulo="Prestadores Ativos" descricao="22" />
        <Card titulo="Procedimentos" descricao="21" />
        <Card titulo="Credenciamentos" descricao="0" />
      </div>

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
          titulo="Processos Licitatórios"
          descricao="Gerenciar processos"
          onClick={() => navigate("/processos")}
        />

        <Card
          tipo="modulo"
          titulo="Prestadores"
          descricao="Gerenciar prestadores"
          onClick={() => navigate("/prestadores")}
        />

        <Card
          tipo="modulo"
          titulo="Procedimentos"
          descricao="Especialidades médicas"
          onClick={() => navigate("/procedimentos")}
        />

        <Card
          tipo="modulo"
          titulo="Credenciamentos"
          descricao="Vincular prestadores"
          onClick={() => navigate("/credenciamentos")}
        />
      </div>
    </DashboardLayout>
  );
}
