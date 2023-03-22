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
            {this.props.editEnabled ? 
            (
                <label className={this.props.className + '-label'}>
                    {this.props.label}
                    
                            <div>
                            <input 
                            type={this.props.type} 
                            onChange={this.onFieldChange}
                            value={this.state.fieldValue}
                            />
                            </div>
                </label>
            )
            :
                <div className={this.props.className}>
                    {this.state.fieldValue}
                </div>
            }
            </div>
        )
    }
}

export default Field;