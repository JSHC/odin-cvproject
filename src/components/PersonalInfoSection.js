import React, { useState } from 'react';
import Field from './Field';
import Section from './Section';
import '../styles/PersonalInfoSection.css';

const PersonalInfoSection = (props) => {
    const [editEnabled, setEditEnabled] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');

    const onEditEnabledChanged = () => {
        setEditEnabled(!editEnabled);
    }

    const onFirstNameChanged = (e) => {
        setFirstName(e.target.value);
    }

    const onLastNameChanged = (e) => {
        setLastName(e.target.value);
    }

    const onTelephoneChanged = (e) => {
        setTelephone(e.target.value);
    }

    const onEmailChanged = (e) => {
        setEmail(e.target.value);
    }

    const canEdit = editEnabled && !props.previewEnabled;
        
        return (
            <Section 
                title="Personal Information"
                editEnabled={canEdit}
                onEditEnabledChanged={onEditEnabledChanged}
                className="personal-info-section"
                previewEnabled={props.previewEnabled}
            >
            <div className="name-container">
                <Field 
                    label="Firstname"
                    type="text"
                    editEnabled={canEdit}
                    className="first-name"
                    size={14}
                    onFieldValueChanged={onFirstNameChanged}
                    fieldValue={firstName}
                />
                <Field 
                    label="Lastname"
                    type="text"
                    editEnabled={canEdit}
                    className="last-name"
                    size={14}
                    onFieldValueChanged={onLastNameChanged}
                    fieldValue={lastName}
                />
            </div>
                <Field 
                    label="Telephone"
                    type="text"
                    editEnabled={canEdit}
                    className="telephone"
                    size={20}
                    onFieldValueChanged={onTelephoneChanged}
                    fieldValue={telephone}
                />
                 <Field 
                    label="Email"
                    type="email"
                    editEnabled={canEdit}
                    className="email"
                    size={35}
                    onFieldValueChanged={onEmailChanged}
                    fieldValue={email}
                />
            </Section>
        )
}

export default PersonalInfoSection;