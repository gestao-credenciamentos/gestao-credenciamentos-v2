import { useNavigate } from "react-router-dom";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const sair = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #eff6ff 0%, #f9fafb 100%)",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont",
        color: "#111827",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#ffffff",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>
            Gestão de Credenciamentos
          </h1>
          <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>
            AMVAP SAÚDE – Consórcio Público Intermunicipal
          </p>
        </div>

        <button
          onClick={sair}
          style={{
            background: "#0d47a1",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Sair
        </button>
      </header>

      {/* CONTEÚDO */}
      <main style={{ padding: "40px 48px" }}>{children}</main>
    </div>
  );
}

export default DashboardLayout;
