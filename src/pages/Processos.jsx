import { useState } from "react";
import ModalProcesso from "../components/ModalProcesso";

export default function Processos() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Processos Licitatórios</h2>

      <button onClick={() => setOpen(true)}>Novo Processo</button>

      {open && <ModalProcesso onClose={() => setOpen(false)} />}
    </div>
  );
}
