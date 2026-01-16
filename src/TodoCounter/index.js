import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
  const { todos } = React.useContext(TodoContext);
  
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  )
}
export {TodoCounter}
