import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import './App.css';

const defaultTodos = [
  { sort: 1, text: 'Cortar cebolla', completed: true },
  { sort: 2, text: 'Tomar el curso de intro a React', completed: false },
  { sort: 3, text: 'Llorar con la llorona', completed: false },
];

function App() {
  // Función para obtener todos desde localStorage
  const getStoredTodos = () => {
    try {
      const storedTodos = localStorage.getItem('todos');
      return storedTodos ? JSON.parse(storedTodos) : defaultTodos;
    } catch (error) {
      console.error('Error al cargar todos desde localStorage:', error);
      return defaultTodos;
    }
  };

  // Función para guardar todos en localStorage
  const saveTodos = (todosToSave) => {
    try {
      localStorage.setItem('todos', JSON.stringify(todosToSave));
    } catch (error) {
      console.error('Error al guardar todos en localStorage:', error);
    }
  };

  const [todos, setTodos] = React.useState(getStoredTodos);
  const [showModal, setShowModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const filteredTodos = React.useMemo(() => {
    if (!searchValue) return todos;
    return todos.filter(todo => 
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [todos, searchValue]);
  const filterTodos = (searchValue) =>{
    setSearchValue(searchValue)
  }

  const addTodo = (text) => {
    const newTodo = {
      sort: todos.length + 1,
      text: text,
      completed: false
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const toggleTodo = (sort) => {
    const newTodos = todos.map(todo => {
      if (todo.sort === sort) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodo = (sort) => {
    const newTodos = todos.filter(todo => todo.sort !== sort);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoCounter completed={todos.filter(todo => todo.completed).length} total={todos.length} />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={filterTodos}
        
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


export default App;
