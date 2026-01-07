import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // LOGIN SIMPLES (TEMPORÁRIO)
    if (usuario === "admin" && senha === "admin") {
      window.location.href = "/";
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* LOGO */}
        <div style={styles.logoArea}>
          <img
            src="/logo.png"
            alt="AMVAP SAÚDE"
            style={styles.logo}
          />
          <h2 style={styles.logoText}>AMVAP SAÚDE</h2>
        </div>

        {/* FORMULÁRIO */}
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            CONFIRMAR
          </button>
        </form>

        {/* RODAPÉ */}
        <div style={styles.footer}>
          Credenciamentos Sistemas
        </div>
      </div>
    </div>
  );
}

export default Login;

/* ================== */
/* ESTILOS COMPLETOS */
/* ================== */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#2f7aa1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "360px",
    background: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    textAlign: "center",
  },

  logoArea: {
    marginBottom: "20px",
  },

  logo: {
    width: "64px",
    marginBottom: "8px",
  },

  logoText: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
    color: "#0f4c81",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  },

  button: {
    marginTop: "8px",
    padding: "12px",
    background: "#4fb3e8",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "700",
    cursor: "pointer",
  },

  footer: {
    marginTop: "20px",
    paddingTop: "12px",
    borderTop: "1px solid #e5e7eb",
    fontSize: "13px",
    color: "#0f4c81",
    fontWeight: "600",
  },
};
