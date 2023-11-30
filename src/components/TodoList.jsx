import React, { useEffect, useState } from 'react';
import './todolist.scss';
import Swal from 'sweetalert2'
import { MdOutlineDelete } from "react-icons/md";
const TodoList = () => {
    const [inputValue, setinputValue] = useState("");
    const [todoList, settodoList] = useState([]);
    const [show, setshow] = useState(false);
    const handleinputChange = (e) => {
        setinputValue(e.target.value)
    }

    const addTodo = () => {
        if (inputValue == "") {
            Swal.fire({
                title: 'Error!',
                text: 'Please input some task',
                icon: 'error',
                confirmButtonText: 'okay'
            })
        } else {
            let obj = {};
            obj.id = todoList.length + 1;
            obj.taskname = inputValue;
            setinputValue("")
            const newtodo = [...todoList, obj]
            settodoList(newtodo)
            localStorage.setItem("todolist", JSON.stringify(newtodo))
        }
    }

    const checkInput = (e, id, index) => {
        let todolist = [...todoList];
        const obj = todolist.find((task) => task.id == id);
        obj.checked = e.target.checked;
        todolist.splice(index, 1, obj)
        settodoList(todolist)
        localStorage.setItem("todolist", JSON.stringify(todolist))
    }

    useEffect(() => {
        const todolist = JSON.parse(localStorage.getItem("todolist"));
        settodoList(todolist)
    }, [])
    return (
        <div className='container mt-5'>
            {show ? <div className='input-todo m-auto'>
                <input type="text" onChange={handleinputChange} value={inputValue} />
                <button className='btn btn-sm btn-primary' onClick={addTodo}>ADD</button>
            </div> : null}
            {/* <button className='btn btn-primary' onClick={() => setshow(!show)}>{show ? "hide" : "show"}</button> */}
            {/* <div>
                <input type="text" />
                <button>sort</button>
            </div> */}
            <ul className='todo-list'>
                {todoList.length > 0 ?
                    todoList.map((todo, index) => {
                        return (
                            <li className='d-flex justify-content-between' key={index}>
                                <div className='d-flex align-items-center'>
                                    <input type="checkbox" className='p-1' onChange={(e) => checkInput(e, todo.id, index)} checked={todo.checked ? true : false} />
                                    {todo?.checked == true ?
                                        <p className='m-0 p-1'><del>{todo.taskname}</del></p> :
                                        <p className='m-0 p-1'>{todo.taskname}</p>
                                    }
                                </div>
                                <button className='btn btn-sm btn-danger m-2'><MdOutlineDelete /></button>
                            </li>
                        )
                    }) : "there is no todo"}
            </ul>
        </div>
    );
}

export default TodoList;
