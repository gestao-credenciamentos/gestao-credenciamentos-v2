export default function Prestadores() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Prestadores</h1>
      <p style={styles.subtitle}>Cadastrar e gerenciar prestadores</p>

      <button style={styles.button}>+ Novo Prestador</button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Município</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clínica Exemplo</td>
            <td>00.000.000/0001-00</td>
            <td>Uberlândia</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
