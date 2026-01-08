import "./modalProcesso.css";

export default function ModalProcesso({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Novo Processo</h3>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
