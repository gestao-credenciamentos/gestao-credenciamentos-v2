export default function Credenciamentos() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Credenciamentos</h1>
      <p style={styles.subtitle}>Vincular prestadores aos processos</p>

      <button style={styles.button}>+ Novo Credenciamento</button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Processo</th>
            <th>Prestador</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001/2025</td>
            <td>Clínica Exemplo</td>
            <td>Ativo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
