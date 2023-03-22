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
            <div className={this.props.className + '-container'}>
            {this.props.editEnabled ? 
            (
                <label className={this.props.className + '-label'}>
                    {this.props.label}
                    
                            <div>
                            <input 
                            type={this.props.type} 
                            onChange={this.onFieldChange}
                            value={this.state.fieldValue}
                            className={this.props.className + '-input'}
                            size={this.state.fieldValue.length + 2}
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