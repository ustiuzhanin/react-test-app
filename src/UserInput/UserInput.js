import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        padding: '10px',
        border: '2px solid green',
        borderRadius: '5px',
        marginTop: '50px'
    }

    return (
        <input 
        type="text" onChange={props.changed} 
        value={props.currentName}
        style={inputStyle} />
    );
}

export default userInput;