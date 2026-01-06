import { useNavigate } from "react-router-dom";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const sair = () => {
    navigate("/login");
  };

  return (
    <div style={{ background: "#f2f6ff", minHeight: "100vh" }}>
      <header
        style={{
          background: "#fff",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div>
          <strong>Gestão de Credenciamentos</strong>
          <div style={{ fontSize: 12, color: "#555" }}>
            AMVAP SAÚDE – Consórcio Público Intermunicipal
          </div>
        </div>

        <button onClick={sair}>Sair</button>
      </header>

      <main style={{ padding: 32 }}>{children}</main>
    </div>
  );
}

export default DashboardLayout;
