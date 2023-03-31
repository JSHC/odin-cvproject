import React from 'react';
import '../styles/TextAreaField.css';

const TextAreaField = (props) => {
    const onFieldChange = (e) => {
        props.onFieldValueChanged(e);
    }

    return (
        <div className={props.className + '-container'}>
            {props.editEnabled ? 
            (
                <label className={props.className + '-label'}>
                    {props.label}
                        <div>
                            <textarea 
                                value={props.fieldValue}
                                className={`textarea-field ${props.className}-textarea`}
                                cols={props.cols || 40}
                                rows={props.rows || 12}
                                onChange={onFieldChange}
                            >
                            </textarea>
                        </div>
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

export default TextAreaField;