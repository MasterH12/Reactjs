import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';

import { TodoContext } from '../TodoContext';

function AppUI({
}) {
  return (
    <div className="App">
      <TodoContext.Consumer>
        { ({ loading,
              filteredTodos,
              toggleTodo,
              deleteTodo,
              showModal,
              setShowModal,
              addTodo }) => (
          <>
            <TodoCounter />

            <TodoSearch />
            <TodoList>
              {loading ? (
                <TodosLoading />
              ) : (
                filteredTodos.map(todo => (
                  <TodoItem 
                    sort={todo.sort} 
                    text={todo.text} 
                    completed={todo.completed} 
                    key={todo.sort}
                    onToggle={() => toggleTodo(todo.sort)}
                    onDelete={() => deleteTodo(todo.sort)}
                  />
                ))
              )}
            </TodoList>

            <CreateTodoButton onClick={() => setShowModal(true)} />

            {showModal && (
              <TodoForm 
                onClose={() => setShowModal(false)}
                onAdd={addTodo}
              />
            )}
          </>
        )}
      </TodoContext.Consumer>

      
    </div>
  );
}

export { AppUI };
