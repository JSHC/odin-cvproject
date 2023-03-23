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
        const editEnabled = this.state.editEnabled && !this.props.previewEnabled;
        
        return (
            <Section 
                title="Personal Information"
                editEnabled={editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
                className="personal-info-section"
                previewEnabled={this.props.previewEnabled}
            >
            <div className="name-container">
                <Field 
                    label="Firstname"
                    type="text"
                    editEnabled={editEnabled}
                    className="first-name"
                />
                <Field 
                    label="Lastname"
                    type="text"
                    editEnabled={editEnabled}
                    className="last-name"
                />
            </div>
                <Field 
                    label="Telephone"
                    type="text"
                    editEnabled={editEnabled}
                    className="telephone"
                />
                 <Field 
                    label="Email"
                    type="email"
                    editEnabled={editEnabled}
                    className="email"
                />
            </Section>
        )
    }
}

export default PersonalInfoSection;