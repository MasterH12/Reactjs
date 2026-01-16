import React from 'react';
import './TodoForm.css';

function TodoForm({ onClose, onAdd }) {
  const [newTodoText, setNewTodoText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      onAdd(newTodoText);
      setNewTodoText('');
      onClose();
    }
  };

  return (
    <div className="Modal-backdrop" onClick={onClose}>
      <div className="Modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="Modal-title">Crear nuevo TODO</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="Modal-textarea"
            placeholder="Escribe tu nuevo TODO..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            autoFocus
          />
          <div className="Modal-buttons">
            <button
              type="button"
              className="Modal-button Modal-button--cancel"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="Modal-button Modal-button--add"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { TodoForm };
