import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function ResetPassword() {
  const [senha, setSenha] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const criarSessao = async () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (!access_token) {
        alert("Link inválido ou expirado");
        return;
      }

      // 🔥 PASSO QUE VOCÊ NÃO TINHA ANTES
      const { error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (error) {
        alert(error.message);
        return;
      }

      setReady(true);
    };

    criarSessao();
  }, []);

  const salvarNovaSenha = async () => {
    const { error } = await supabase.auth.updateUser({
      password: senha,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Senha redefinida com sucesso");
      window.location.href = "/login";
    }
  };

  if (!ready) return <p>Validando link de redefinição...</p>;

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Nova senha</h2>

      <input
        type="password"
        placeholder="Digite a nova senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={salvarNovaSenha}>
        Salvar nova senha
      </button>
    </div>
  );
}

export default ResetPassword;
