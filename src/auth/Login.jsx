import { useState } from "react";
import "./login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(usuario, senha);
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">

        {/* LOGO – NÃO IMPORTA, VEM DO PUBLIC */}
        <img
          src="/logo-amvap.png"
          alt="Logo AMVAP Saúde"
          className="login-logo"
        />

        <h2>Credenciamentos Sistemas</h2>

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
