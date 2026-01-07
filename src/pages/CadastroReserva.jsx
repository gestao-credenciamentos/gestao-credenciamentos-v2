export default function CadastroReserva() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Cadastro Reserva</h1>
      <p style={styles.subtitle}>Gerenciar cadastro reserva</p>

      <button style={styles.button}>+ Novo Cadastro</button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Prestador</th>
            <th>Procedimento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clínica Exemplo</td>
            <td>Consulta Pediátrica</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
