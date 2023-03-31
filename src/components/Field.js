import React from 'react';
import '../styles/Field.css'

const Field = (props) => {
    const onFieldChange = (e) => {
        props.onFieldValueChanged(e);
    }

    return (
        <div className={props.className + '-container'}>
            {props.editEnabled ? 
            (
                <label className={`field-label ${props.className}-label`}>
                    {props.label}
                            {props.type === 'checkbox' ? 
                                <input 
                                type={props.type} 
                                onChange={onFieldChange}
                                checked={props.fieldValue}
                                className={props.className + '-input'}
                                />
                                :
                                <input 
                                type={props.type} 
                                onChange={onFieldChange}
                                value={props.fieldValue}
                                className={props.className + '-input'}
                                />
                            }
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

export default Field;