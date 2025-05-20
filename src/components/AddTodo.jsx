import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const AddTodo = () => {
    const [newtodoval, setNewTodoVal] = useState('');
    const { addTodo } = useTodos();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({id: Date.now(), name: newtodoval});
        setNewTodoVal('');
    };

    return (
        <form onSubmit={handleSubmit}>
                <label>Add New Todo</label>
                <input type="text" name="newtodo" value={newtodoval} onChange={(e) => setNewTodoVal(e.target.value)}/>
                <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;