import React, { useState } from 'react';
import Field from './Field';
import '../styles/PracticalExperienceComponent.css';
import YearRangeComponent from './YearRangeComponent';
import { FaTimesCircle } from 'react-icons/fa';
import IconButton from './IconButton';
import TextAreaField from './TextAreaField';

const PracticalExperienceComponent = (props) => {
    const [positionTitle, setPositionTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [description, setDescription] = useState('');

    const onPositionTitleChanged = (e) => {
        setPositionTitle(e.target.value)
    }

    const onCompanyNameChanged = (e) => {
        setCompanyName(e.target.value)
    }

    const onDescriptionChanged = (e) => {
        setDescription(e.target.value)
    }

    const { editEnabled } = props;
    return (
        <div className={props.className}>
            <Field 
                label="Position Title"
                type="text"
                editEnabled={editEnabled}
                className="position-title"
                size={25}
                fieldValue={positionTitle}
                onFieldValueChanged={onPositionTitleChanged}
            />
            <Field 
                label="Company Name"
                type="text"
                editEnabled={editEnabled}
                className="company-name"
                size={35}
                fieldValue={companyName}
                onFieldValueChanged={onCompanyNameChanged}
            />
            <TextAreaField 
                label="Description"
                editEnabled={editEnabled}
                className="description"
                fieldValue={description}
                onFieldValueChanged={onDescriptionChanged}
            />
            <YearRangeComponent 
                editEnabled={editEnabled}
                className='practical-experience-years'
            />
            {props.canRemove && 
                <IconButton
                    className='remove-practical-experience-button icon-button-red'
                    onClick={(e) => props.onRemoveButtonClicked(e, props.id)}
                    text='Remove'
                    icon={<FaTimesCircle />}
                />
            }
        </div>
    )
}

export default PracticalExperienceComponent;