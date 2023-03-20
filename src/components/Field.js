import React from 'react';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldValue: '',
            editEnabled: true,
        }

        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFieldSave = this.onFieldSave.bind(this);
        this.onEditButtonClick = this.onEditButtonClick.bind(this);
    }
    onFieldChange(e) {
        this.setState({fieldValue: e.target.value})
    }

    onFieldSave(e) {
        e.preventDefault();
        this.setState({editEnabled: false})
    }
    onEditButtonClick(e) {
        this.setState({editEnabled: true});
    }

    render() {
        return (
            <div>
                <label>
                    {this.props.label}
                    {this.props.editEnabled ? 
                        (
                            <div>
                            <input 
                            type={this.props.type} 
                            onChange={this.onFieldChange}
                            value={this.state.fieldValue}
                            />
                            </div>
                        )
                        :
                        <div>
                            {this.state.fieldValue}
                        </div>
                    }
                </label>
            </div>
        )
    }
}

export default Field;