import React from 'react';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldValue: '',
            editEnabled: true,
        }


    }

    render() {
        return (
            <div>
                <label>
                    {this.props.label}
                </label>
            </div>
        )
    }
}

export default Field;