import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const { addTodo, setShowModal } = React.useContext(TodoContext);
  const [newTodoText, setNewTodoText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText('');
      setShowModal(false);
    }
  };

  const onChange = (e) => {
    setNewTodoText(e.target.value);
  }

  const onClose = () => {
    setShowModal(false);
  }

  return ReactDOM.createPortal(
    <div className="Modal-backdrop" onClick={onClose}>
      <div className="Modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="Modal-title">Crear nuevo TODO</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="Modal-textarea"
            placeholder="Escribe tu nuevo TODO..."
            value={newTodoText}
            onChange={onChange}
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
  , document.getElementById('modal'));
}

export { TodoForm };
