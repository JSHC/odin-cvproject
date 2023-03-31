import React from 'react';
import '../styles/IconButton.css';

const IconButton = (props) => {
    return (
        <button 
                className={`icon-button ${props.className}`}
                onClick={props.onClick}
            >
                {props.icon}
                <span>{props.text}</span>
            </button>
    )
}

export default IconButton;