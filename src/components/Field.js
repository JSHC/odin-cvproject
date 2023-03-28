import React from 'react';

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(e) {
        this.props.onFieldValueChanged(e);
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
                            value={this.props.fieldValue}
                            className={this.props.className + '-input'}
                            size={this.props.fieldValue.length > this.props.size ? this.props.fieldValue.length + 4 : this.props.size}
                            />
                            </div>
                </label>
            )
            :
                <div className={this.props.className}>
                    {this.props.fieldValue}
                </div>
            }
            </div>
        )
    }
}

export default Field;