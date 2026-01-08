import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // login simulado por enquanto
    if (usuario && senha) {
      navigate("/dashboard");
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img
          src="/logo-amvap.png"
          alt="Logo AMVAP Saúde"
          className="login-logo"
        />

        <h2 className="login-title">
          SISTEMA DE CREDENCIAMENTOS
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
