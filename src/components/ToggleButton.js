import React from 'react';

class ToggleButton extends React.Component {

    render() {
        const { editEnabled, onToggleChanged } = this.props;
        return (
            <div 
                onClick={onToggleChanged}
                className={`toggle-button ${editEnabled ? 'enabled' : 'disabled'}`}
            >
                <div className='toggle-button-inner'>
                    <div className='toggle-button-circle'></div>
                </div>
            </div>
        )
    }
}

export default ToggleButton;