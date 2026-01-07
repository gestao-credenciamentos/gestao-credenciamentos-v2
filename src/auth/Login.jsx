import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../layout/LoginLayout.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const entrar = (e) => {
    e.preventDefault();

    // LOGIN FIXO INICIAL
    if (email === "admin" && senha === "admin") {
      navigate("/dashboard");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LOGO */}
        <div className="logo">
          <img src="/logo-amvap.png" alt="AMVAP SAÚDE" />
        </div>

        {/* FORM */}
        <form className="form" onSubmit={entrar}>
          <input
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">CONFIRMAR</button>
        </form>

        {/* FOOTER */}
        <div className="footer">
          <hr />
          <span className="footer-title">
            SISTEMA DE CREDENCIAMENTOS
          </span>
        </div>

      </div>
    </div>
  );
}

export default Login;
