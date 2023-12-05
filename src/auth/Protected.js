import React from 'react';
import { Navigate, } from 'react-router-dom'
const Protected = (props) => {

    if (JSON.parse(localStorage.getItem("userinfo")) != null) {
        return <props.children />
    } else {
        return <Navigate to={'/'} />
    }

}

export default Protected;
