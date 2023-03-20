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
    }
    onFieldChange(e) {
        this.setState({fieldValue: e.target.value})
    }

    onFieldSave(e) {
        e.preventDefault();
        this.setState({editEnabled: false})
    }

    render() {
        return (
            <div>
                <label>
                    {this.props.label}
                    {this.state.editEnabled ? 
                        (
                            <form onSubmit={this.onFieldSave}>
                            <input 
                            type={this.props.type} 
                            onChange={this.onFieldChange}
                            value={this.state.fieldValue}
                            />
                            <button type="submit">Save</button>
                            </form>
                        )
                        :
                        <div>{this.state.fieldValue}</div>
                    }
                </label>
            </div>
        )
    }
}

export default Field;