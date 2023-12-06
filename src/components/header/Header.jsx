import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex gap-3'>
            <Link  className="text-decoration-none" to="/home">Home</Link>
            <Link  className="text-decoration-none" to={"/about"}>About</Link>
            <Link  className="text-decoration-none" to={"/contact"}>Contact</Link>
            <Link  className="text-decoration-none" to={"/todolist"}>TodoList</Link>
        </div>
    );
}

export default Header;
