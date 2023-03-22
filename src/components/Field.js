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
            <div className={this.props.className}>
                <label className={this.props.className + '-label'}>
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