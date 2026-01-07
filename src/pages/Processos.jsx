import { useState } from "react";
import ModalProcesso from "../components/ModalProcesso";

export default function Processos() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div style={{ padding: "24px" }}>
      <h1>Processos</h1>

      <button
        onClick={() => setModalAberto(true)}
        style={{
          marginTop: "16px",
          padding: "10px 16px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Novo Processo
      </button>

      {modalAberto && (
        <ModalProcesso onClose={() => setModalAberto(false)} />
      )}
    </div>
  );
}
