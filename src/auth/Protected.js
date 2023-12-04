import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Protected = ({ component }) => {
    const [loggedin, setloggedin] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const userinfo = JSON.parse(localStorage.getItem("userinfo"))
        console.log(userinfo)
        if (userinfo == null) {
            setloggedin(false)
            navigate("/")
        } else {
            setloggedin(true)
        }
    }, []);

    return (
        loggedin ?
            <h1>Hello</h1> : <h1>Bye</h1>
    )

}

export default Protected;
