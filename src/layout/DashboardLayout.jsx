export default function DashboardLayout({ children }) {
  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>AMVAP Saúde</h2>

        <nav style={styles.nav}>
          <a href="/dashboard" style={styles.link}>Dashboard</a>
          <a href="/processos" style={styles.link}>Processos</a>
          <a href="/prestadores" style={styles.link}>Prestadores</a>
          <a href="/procedimentos" style={styles.link}>Procedimentos</a>
          <a href="/credenciamentos" style={styles.link}>Credenciamentos</a>
          <a href="/cadastro-reserva" style={styles.link}>Cadastro Reserva</a>
          <a href="/relatorios" style={styles.link}>Relatórios</a>
          <a href="/usuarios" style={styles.link}>Usuários</a>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main style={styles.main}>
        {children}
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f3f4f6",
  },
  sidebar: {
    width: 260,
    background: "#0d47a1",
    color: "#fff",
    padding: 24,
  },
  logo: {
    marginBottom: 32,
    fontSize: 20,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
  },
  main: {
    flex: 1,
    padding: 32,
  },
};
