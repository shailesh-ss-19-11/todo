import React from 'react';
import OtherChild from './OtherChild';

const Child = (props) => {
    return (
        <div>
            this is child component
            <OtherChild data={props.data}/>
        </div>
    );
}

export default Child;
