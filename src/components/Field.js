import React from 'react';
import '../styles/Field.css'

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
                <label className={`field-label ${this.props.className}-label`}>
                    {this.props.label}
                            {this.props.type === 'checkbox' ? 
                                <input 
                                type={this.props.type} 
                                onChange={this.onFieldChange}
                                checked={this.props.fieldValue}
                                className={this.props.className + '-input'}
                                />
                                :
                                <input 
                                type={this.props.type} 
                                onChange={this.onFieldChange}
                                value={this.props.fieldValue}
                                className={this.props.className + '-input'}
                                />
                            }
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