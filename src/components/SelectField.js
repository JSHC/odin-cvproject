import _ from 'lodash';
import React from 'react';

class SelectField extends React.Component {
    constructor(props) {
        super(props);

        this.onFieldChange = this.onFieldChange.bind(this);
        
        const year = new Date().getFullYear();
        this.years = _.range(1900, year + 1);
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
                    
                            <select name={this.props.name} onChange={this.props.onFieldValueChanged} value={this.props.fieldValue}>
                                {this.years.map(year => {
                                    return <option name={this.props.name} key={year}>{year}</option>
                                })}
                            </select>
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

export default SelectField;