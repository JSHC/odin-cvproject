import React, { useState } from 'react';
import Field from './Field';
import '../styles/EducationComponent.css';
import YearRangeComponent from './YearRangeComponent';
import { FaTimesCircle } from 'react-icons/fa';
import IconButton from './IconButton';

const EducationComponent = (props) => {
    const [education, setEducation] = useState('');
    const [schoolName, setSchoolName] = useState('');

    const onEducationChanged = (e) => {
        setEducation(e.target.value);
    }

    const onSchoolNameChanged = (e) => {
        setSchoolName(e.target.value);
    }

    const editEnabled = props.editEnabled && !props.previewEnabled;
    return (
        <div className={props.className}>
            <Field 
                label="Education"
                type="text"
                className="education"
                editEnabled={editEnabled} 
                size={30}                
                fieldValue={education}      
                onFieldValueChanged={onEducationChanged}  
                />
                
            <Field 
                label="School Name"
                type="text" 
                className="school-name"
                editEnabled={editEnabled} 
                size={35}
                fieldValue={schoolName}        
                onFieldValueChanged={onSchoolNameChanged}  
                />
            <YearRangeComponent 
                editEnabled={editEnabled}
                className='education-years'
            />
            {(props.canRemove && editEnabled) && 
                <IconButton
                    className='remove-education-button icon-button-red'
                    onClick={(e) => props.onRemoveButtonClicked(e, props.id)}
                    text='Remove'
                    icon={<FaTimesCircle />}
                />
            }
        </div>
    )
}

export default EducationComponent;