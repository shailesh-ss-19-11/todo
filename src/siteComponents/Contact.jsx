import React from 'react';
import { useContext } from 'react';
import { gloablContext } from '../App';
const Contact = () => {
    const context = useContext(gloablContext)
    return (
        <div>
            {context.bgColor}
        </div>
    );
}

export default Contact;
