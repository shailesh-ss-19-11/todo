import React, { useEffect, useRef, useState } from 'react';
import './todolist.scss';
import Swal from 'sweetalert2'
import { MdOutlineDelete } from "react-icons/md";
const TodoList = () => {
    const [inputValue, setinputValue] = useState("");
    const [todoList, settodoList] = useState([]);
    const [show, setshow] = useState(false);
    const [object, setobject] = useState({});
    const myref = useRef(null);
    const handleinputChange = (e) => {
        setinputValue(e.target.value)
    }

    const addTodo = (e) => {
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
            console.dir(myref.current)
            myref.current.scrollIntoView({ behavior: "smooth" });
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

    const handleDelete = (id) => {
        let todolist = [...todoList];
        const newaarr = todolist.filter((task) => task.id != id);
        console.log(newaarr, "newaarr")
        settodoList(newaarr)
        localStorage.setItem("todolist", JSON.stringify(newaarr))
    }

    const search = (e) => {
        console.log(e.target.value)
        if (e.target.value == "") {
            const todoitems = JSON.parse(localStorage.getItem("todolist"))
            settodoList(todoitems)
        } else {
            let todolist = [...todoList];
            const newaarr = todolist.filter((task) => task.taskname.includes(e.target.value));
            settodoList(newaarr)
        }

    }
    const addTodoUsingEnter = (e) => {
        if (e.code === "Enter") {
            let obj = {};
            obj.id = todoList.length + 1;
            obj.taskname = inputValue;
            setinputValue("")
            const newtodo = [...todoList, obj]
            settodoList(newtodo)
            localStorage.setItem("todolist", JSON.stringify(newtodo))
            console.dir(myref.current)
            myref.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div className='container mt-5'>
            <div className='input-todo m-auto'>
                <input type="text" onChange={handleinputChange} value={inputValue} placeholder='add todo' onKeyDown={addTodoUsingEnter} />
                <button className='btn btn-sm btn-primary' onClick={addTodo}>ADD</button>
                <input type="text" onChange={search} placeholder='search' />
            </div>
            {/* <button className='btn btn-primary' onClick={() => setshow(!show)}>{show ? "hide" : "show"}</button> */}
            {/* <div>
                <input type="text" />
                <button>sort</button>
            </div> */}
            {object?.name}
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
                                <button className='btn btn-sm btn-danger m-2' onClick={() => handleDelete(todo.id)}><MdOutlineDelete /></button>
                            </li>
                        )
                    }) : "there is no todo"}
            </ul>
            <div ref={myref} className='mb-5'></div>
        </div>
    );
}

export default TodoList;
