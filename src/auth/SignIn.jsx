import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';
const SignIn = () => {
    const [userinfo, setuserinfo] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleInput = (e) => {
        let obj = { ...userinfo };
        obj[e.target.name] = e.target.value;
        console.log(obj)
        setuserinfo(obj)
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/login", userinfo).
            then((resp) => {
                if (resp.status == 200) {
                    localStorage.setItem("userinfo", JSON.stringify(resp.data))
                    navigate("/todolist")
                }
            }).catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }
    return (
        <div className='container'>
            <form onSubmit={login}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" onChange={handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name='password' onChange={handleInput} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className='d-flex gap-3 mt-4'>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <Link to="/signup" class="btn btn-primary">Signup</Link>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
