export default function Procedimentos() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Procedimentos Médicos</h1>
      <p style={styles.subtitle}>Procedimentos e especialidades</p>

      <button style={styles.button}>+ Novo Procedimento</button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Procedimento</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consulta Neuropediatria</td>
            <td>Neurologia</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
