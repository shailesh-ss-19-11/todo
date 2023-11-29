import React, { useState } from 'react';
import './todolist.scss';
const TodoList = () => {
    const [inputValue, setinputValue] = useState("");
    const [todoList, settodoList] = useState([]);

    const handleinputChange = (e) => {
        setinputValue(e.target.value)
    }

    const addTodo = () => {
        console.log(inputValue)
        let obj = {};
        obj.id = todoList.length + 1;
        obj.taskname = inputValue;
        setinputValue("")
        const newtodo = [...todoList, obj]
        console.log(newtodo, "newtodo")
        settodoList(newtodo)
    }

    return (
        <div className='container mt-5'>
            <div className='input-todo m-auto'>
                <input type="text" onChange={handleinputChange} value={inputValue} />
                <button className='btn btn-sm btn-primary' onClick={addTodo}>ADD</button>
            </div>
            {/* <div>
                <input type="text" />
                <button>sort</button>
            </div> */}
            <ul className='todo-list'>
                {todoList.length > 0 ?
                    todoList.map((todo) => {
                        return (
                            <li className='d-flex '> <input type="checkbox" className='p-1' />
                                <p className='m-0 p-1'>{todo.taskname}</p>
                            </li>
                        )
                    }) : "there is no todo"}
            </ul>
        </div>
    );
}

export default TodoList;
