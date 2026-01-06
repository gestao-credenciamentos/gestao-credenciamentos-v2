import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const entrar = (e) => {
    e.preventDefault();

    // ADMIN FIXO (INICIAL)
    if (email === "admin" && senha === "admin") {
      navigate("/dashboard");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "60px auto" }}>
      <h2>Login</h2>

      <form onSubmit={entrar}>
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

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
