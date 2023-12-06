import React from 'react';
import { useContext } from 'react';
import { gloablContext } from '../App';
const Home = () => {
    const context = useContext(gloablContext)
    console.log(context)
    
    return (
        <div style={{background:context.bgColor}}>
            Home
            <button onClick={()=>context.changeColor("orange")}>change Color</button>
        </div>
    );
}

export default Home;
