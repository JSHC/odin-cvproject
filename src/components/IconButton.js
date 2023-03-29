import React from 'react';

class IconButton extends React.Component {
    render() {
        return (
            <button className='icon-button' onClick={this.props.onClick}>
                {this.props.icon}
                <span>{this.props.text}</span>
            </button>
        )
    }
}

export default IconButton;