.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-box {
  background: #ffffff;
  width: 420px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.modal-box h2 {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
}

.modal-content label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 12px;
}

.modal-content input,
.modal-content select {
  margin-top: 6px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  font-size: 14px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 18px;
}

.btn-cancelar {
  background: #e5e7eb;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-salvar {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
