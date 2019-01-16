import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="user-output">
            <p>Hello, my name is {props.name}</p>
            <p>I`m a {props.occupation}</p>
        </div>
        
    );
}

export default userOutput;