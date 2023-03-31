import React from 'react';
import '../styles/ToggleButton.css';

const ToggleButton = (props) => {
    const { previewEnabled, onToggleChanged } = props;
    return (
        <div 
            onClick={onToggleChanged}
            className={`toggle-button ${previewEnabled ? 'enabled' : 'disabled'}`}
        >
            <div className='toggle-button-inner'>
                <div className='toggle-button-circle'></div>
            </div>
        </div>
    )
}

export default ToggleButton;