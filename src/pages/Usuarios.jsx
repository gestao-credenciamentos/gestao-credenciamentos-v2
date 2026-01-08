import { styles } from "../styles/pageStyles";
export default function Usuarios() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Usuários</h1>
      <p style={styles.subtitle}>Gerenciar usuários do sistema</p>

      <button style={styles.button}>+ Novo Usuário</button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administrador</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
