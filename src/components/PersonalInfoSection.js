import React from 'react';
import Field from './Field';
import Section from './Section';
import '../styles/PersonalInfoSection.css';

class PersonalInfoSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {editEnabled: true}
        this.onEditEnabledChanged = this.onEditEnabledChanged.bind(this);
    }

    onEditEnabledChanged() {
        this.setState({editEnabled: !this.state.editEnabled})
    }

    render() {
        const { editEnabled } = this.state;
        
        return (
            <Section 
                title="Personal Information"
                editEnabled={this.state.editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
                className="personal-info-section"
            >
                <Field 
                    label="Firstname"
                    type="text"
                    editEnabled={editEnabled}
                />
                <Field 
                    label="Lastname"
                    type="text"
                    editEnabled={editEnabled}
                />
                <Field 
                    label="Telephone"
                    type="text"
                    editEnabled={editEnabled}
                />
                 <Field 
                    label="Email"
                    type="email"
                    editEnabled={editEnabled}
                />
            </Section>
        )
    }
}

export default PersonalInfoSection;