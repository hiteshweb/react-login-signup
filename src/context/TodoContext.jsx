import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todolist, setTodolist] = useState([]);

  const addTodo = (todo) => {
    setTodolist([...todolist, todo]);
  };
  const deleteTodo = (todo) => {
    setTodolist(todolist.filter((x) => x.id !== todo.id));
  };

  const updateTodo = (editTodo) => {
    const updatedTodoList = todolist.map((todo) => {
      if(todo.id === editTodo.id){
        return {...todo, name: editTodo.name};
      }
      return todo;
    });
    setTodolist(updatedTodoList)
  };

  return (
    <TodoContext.Provider value={{ todolist, deleteTodo, updateTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
