import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoList = () => {
    const { todolist, updateTodo, deleteTodo } = useTodos();
    const [editid, setEditId] = useState('');
    const [editText, setEditText] = useState('');

    const [search, setSearch] = useState('');

    const clearEditInfo = () => {
        setEditId('');
        setEditText('');
    }

    const setEditInfo = (todo) => {
        setEditId(todo.id);
        setEditText(todo.name);
    };

    const updateTodoInfo = () => {
        updateTodo({id:editid, name: editText});
        clearEditInfo();
    };

    const filteredTodos = todolist.filter((x) => x.name.includes(search));

    return (
        <>
        {todolist.length > 0 ? (
        <div>
          <label>Search Todo</label>
         <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
         
      </div>
      ) : ''}
      
      <br/>
        <div className="todolist">
           <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        {editid === todo.id ? (
                            <>
                            <input type="text" name="edit" value={editText} onChange={(e) => setEditText(e.target.value)}/> 
                            <button type="button" onClick={() => updateTodoInfo()}>Update</button>
                            <button type="button" onClick={() => clearEditInfo('')}>Cancel</button>
                            </>
                        ) : 
                        <>
                        Id: {todo.id}, Name: {todo.name}, <button type="button" onClick={() => setEditInfo(todo)}> Edit</button><button onClick={() => deleteTodo(todo)}>Delete</button>
                        </>
                    }
                        
                    </li>
                    ))}
            </ul>
        </div>
        </>
    );
};

export default TodoList;