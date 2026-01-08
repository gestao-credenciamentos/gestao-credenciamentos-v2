export default function Home() {
  return (
    <>
      <h1>Gestão de Credenciamentos</h1>
      <p>AMVAP SAÚDE - Consórcio Público Intermunicipal</p>

      <div style={grid}>
        <Card title="Processos Abertos" value="3" />
        <Card title="Prestadores Ativos" value="22" />
        <Card title="Procedimentos" value="21" />
        <Card title="Credenciamentos" value="0" />
      </div>
    </>
  );
}

function Card({ title, value }) {
  return (
    <div style={card}>
      <p>{title}</p>
      <strong>{value}</strong>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 16,
  marginTop: 24,
};

const card = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
};
