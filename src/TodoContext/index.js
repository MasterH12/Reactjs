import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const defaultTodos = [
  { sort: 1, text: 'Cortar cebolla', completed: true },
  { sort: 2, text: 'Tomar el curso de intro a React', completed: false },
  { sort: 3, text: 'Llorar con la llorona', completed: false },
];

function TodoProvider({children}){
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
        <TodoContext.Provider
        value={{
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
        }}>
            {children}
        </TodoContext.Provider>
    );
}

<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider };