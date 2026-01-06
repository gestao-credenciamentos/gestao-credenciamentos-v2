import { supabase } from "../supabase";

function Home() {
  const sair = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sistema AMVAP SAÚDE</h1>
      <p>Usuário autenticado com sucesso.</p>

      <button onClick={sair}>Sair</button>
    </div>
  );
}

export default Home;
