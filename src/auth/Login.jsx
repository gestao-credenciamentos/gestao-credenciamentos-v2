import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const { login, logout } = useAuth();
  const navigate = useNavigate();

  // 🔐 mata qualquer sessão antiga
  useEffect(() => {
    logout();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    const success = await login(usuario, senha);

    if (!success) {
      setErro("Usuário ou senha inválidos");
      return;
    }

    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Usuário"
      />

      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
      />

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <button type="submit">Entrar</button>
    </form>
  );
}
