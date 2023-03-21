import React from 'react';
import Field from './Field';
import Section from './Section';

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
                label="Personal Information"
                editEnabled={this.state.editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
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
                    type="text"
                    editEnabled={editEnabled}
                />
            </Section>
        )
    }
}

export default PersonalInfoSection;