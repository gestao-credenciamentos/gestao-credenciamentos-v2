import { styles } from "../styles/pageStyles";
export default function Relatorios() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Relatórios</h1>
      <p style={styles.subtitle}>Relatórios por processo</p>

      <button style={styles.button}>Gerar Relatório</button>
    </div>
  );
}
