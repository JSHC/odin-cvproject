import React, { useState } from 'react';
import EducationComponent from './EducationComponent';
import Section from './Section';
import uniqid from 'uniqid';
import '../styles/EducationSection.css';
import { FaPlusCircle } from 'react-icons/fa';
import IconButton from './IconButton';

const EducationSection = (props) => {
    const [editEnabled, setEditEnabled] = useState(true);
    const [educations, setEducations] = useState(
        [{id: uniqid(), canRemove: false}]
    );

    const onEditEnabledChanged = () => {
        setEditEnabled(!editEnabled)
    }

    const onAddButtonClicked = () => {
        addEducation(true)
    }

    const addEducation = (canRemove) => {
        setEducations(
            educations.concat({id: uniqid(), canRemove: canRemove})
        )
    }

    const onRemoveEducation = (e, id) => {
        const newEducations = educations.filter((item) => {
            return id !== item.id;
        })
        setEducations(newEducations)
    }

    const canEdit = editEnabled && !props.previewEnabled;
        
    return (
        <Section
            title="Education"
            editEnabled={canEdit}
            onEditEnabledChanged={onEditEnabledChanged}
            className="education-section"
            previewEnabled={props.previewEnabled}
        >
            {educations.map((item) => {
                return <EducationComponent 
                            id={item.id} 
                            editEnabled={canEdit}
                            onRemoveButtonClicked={onRemoveEducation}
                            key={item.id}
                            canRemove={item.canRemove}
                            className="education-component"
                            />;
            })}

            {props.previewEnabled === false && 
                <IconButton
                    className='add-button icon-button-green'
                    onClick={onAddButtonClicked}
                    text='Add'
                    icon={<FaPlusCircle />}
                />
            }
        </Section>
    )
}

export default EducationSection;