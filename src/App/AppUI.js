import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';

function AppUI({
  loading,
  error,
  todos,
  filteredTodos,
  searchValue,
  setSearchValue,
  showModal,
  setShowModal,
  addTodo,
  toggleTodo,
  deleteTodo,
}) {
  if (loading) {
    return <div className="App"><p>Cargando...</p></div>;
  }

  if (error) {
    return <div className="App"><p>Error al cargar los datos</p></div>;
  }

  return (
    <div className="App">
      <TodoCounter 
        completed={todos.filter(todo => todo.completed).length} 
        total={todos.length} 
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {filteredTodos.map(todo => (
          <TodoItem 
            sort={todo.sort} 
            text={todo.text} 
            completed={todo.completed} 
            key={todo.sort}
            onToggle={() => toggleTodo(todo.sort)}
            onDelete={() => deleteTodo(todo.sort)}
          />
        ))}
      </TodoList>

      <CreateTodoButton onClick={() => setShowModal(true)} />

      {showModal && (
        <TodoForm 
          onClose={() => setShowModal(false)}
          onAdd={addTodo}
        />
      )}
    </div>
  );
}

export { AppUI };
