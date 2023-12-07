import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { gloablContext } from '../../App';
const Header = () => {
    const context = useContext(gloablContext)
    return (
        <div className={`d-flex gap-3 ${context.headerclass}`}>
            <Link className="text-decoration-none" to="/home">Home</Link>
            <Link className="text-decoration-none" to={"/about"}>About</Link>
            <Link className="text-decoration-none" to={"/contact"}>Contact</Link>
            <Link className="text-decoration-none" to={"/todolist"}>TodoList</Link>
            <Link className="text-decoration-none" to={"/userlist"}>userlist</Link>
        </div>
    );
}

export default Header;
