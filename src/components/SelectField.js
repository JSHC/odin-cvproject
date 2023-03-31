import _ from 'lodash';
import React from 'react';

const SelectField = (props) => {
    const year = new Date().getFullYear();
    const years = _.range(1900, year + 1);

    return (
        <div className={props.className + '-container'}>
        {props.editEnabled ? 
        (
            <label className={props.className + '-label'}>
                {props.label}
                
                        <select name={props.name} onChange={props.onFieldValueChanged} value={props.fieldValue}>
                            {years.map(item => {
                                return <option name={props.name} key={item}>{item}</option>
                            })}
                        </select>
            </label>
        )
        :
            <div className={props.className}>
                {props.fieldValue}
            </div>
        }
        </div>
    )
}

export default SelectField;