import React from 'react';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldValue: '',
            editEnabled: true,
        }

        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(e) {
        this.setState({fieldValue: e.target.value})
    }

    render() {
        return (
            <div>
                <label>
                    {this.props.label}
                    {this.state.editEnabled ? 
                        (
                            <form>
                            <input 
                            type={this.props.type} 
                            onChange={this.onFieldChange} />
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