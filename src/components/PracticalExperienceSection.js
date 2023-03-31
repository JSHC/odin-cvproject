import React, { useState } from 'react';
import PracticalExperienceComponent from './PracticalExperienceComponent';
import Section from './Section';
import uniqid from 'uniqid';
import '../styles/PracticalExperienceSection.css';
import { FaPlusCircle } from 'react-icons/fa';
import IconButton from './IconButton';

const PracticalExperienceSection = (props) => {
    const [editEnabled, setEditEnabled] = useState(true);
    const [practicalExperiences, setPracticalExperiences] = useState(
        [{id: uniqid(), canRemove: false}]
    );

    const onEditEnabledChanged = () => {
        setEditEnabled(!editEnabled);
    }

    const onRemoveButtonClicked = (e, id) => {
        const newPracticalExperiences = practicalExperiences
        .filter((item) => {
            return id !== item.id;
        })
        setPracticalExperiences(newPracticalExperiences);
    }

    const onAddButtonClicked = () => {
        setPracticalExperiences(
            practicalExperiences.concat(
                {id: uniqid(), canRemove: true}
            )
        );
    }

    const canEdit = editEnabled && !props.previewEnabled;
    return (
        <Section
            title="Practical Experience"
            editEnabled={canEdit}
            onEditEnabledChanged={onEditEnabledChanged}
            className="practical-epxerience-section"
            previewEnabled={props.previewEnabled}
        >
            {practicalExperiences.map((item) => {
                return <PracticalExperienceComponent 
                    id={item.id}
                    editEnabled={canEdit}
                    onRemoveButtonClicked={onRemoveButtonClicked}
                    key={item.id}
                    canRemove={item.canRemove}
                    className="practical-experience-component"
                />
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

export default PracticalExperienceSection;