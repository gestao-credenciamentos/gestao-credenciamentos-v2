export default function Processos() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Processos Licitatórios</h1>
      <p style={styles.subtitle}>Gerenciar processos de credenciamento</p>

      <div style={styles.actions}>
        <button style={styles.button}>+ Novo Processo</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Nº Processo</th>
            <th>Objeto</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001/2025</td>
            <td>Credenciamento Médico</td>
            <td>Aberto</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
