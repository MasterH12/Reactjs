import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import './App.css';

const defaultTodos = [
  { sort: 1, text: 'Cortar cebolla', completed: true },
  { sort: 2, text: 'Tomar el curso de intro a React', completed: false },
  { sort: 3, text: 'Llorar con la llorona', completed: false },
];

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('todos', defaultTodos);

  const [showModal, setShowModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const filteredTodos = React.useMemo(() => {
    if (!searchValue) return todos;
    return todos.filter(todo => 
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [todos, searchValue]);

  const addTodo = (text) => {
    const newTodo = {
      sort: todos.length + 1,
      text: text,
      completed: false
    };
    const updatedTodos = [...todos, newTodo];
    saveTodos(updatedTodos);
  };

  const toggleTodo = (sort) => {
    const newTodos = todos.map(todo => {
      if (todo.sort === sort) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (sort) => {
    const newTodos = todos.filter(todo => todo.sort !== sort);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      todos={todos}
      filteredTodos={filteredTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      showModal={showModal}
      setShowModal={setShowModal}
      addTodo={addTodo}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  );
}


export default App;
