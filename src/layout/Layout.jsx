function Layout({ children }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      
      <header
        style={{
          backgroundColor: "#0d47a1",
          color: "#fff",
          padding: "16px",
        }}
      >
        <h1 style={{ margin: 0 }}>CONSÓRCIO AMVAP SAÚDE</h1>
        <p style={{ margin: 0 }}>Gestão de Credenciamentos</p>
      </header>

      <main style={{ padding: "20px" }}>
        {children}
      </main>

    </div>
  );
}

export default Layout;
