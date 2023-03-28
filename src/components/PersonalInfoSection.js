import React from 'react';
import Field from './Field';
import Section from './Section';
import '../styles/PersonalInfoSection.css';

class PersonalInfoSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editEnabled: true,
            firstName: '',
            lastName: '',
            telephone: '',
            email: '',
        }
        this.onEditEnabledChanged = this.onEditEnabledChanged.bind(this);
        this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
        this.onLastNameChanged = this.onLastNameChanged.bind(this);
        this.onTelephoneChanged = this.onTelephoneChanged.bind(this);
        this.onEmailChanged = this.onEmailChanged.bind(this);
    }

    onEditEnabledChanged() {
        this.setState({editEnabled: !this.state.editEnabled})
    }

    onFirstNameChanged(e) {
        this.setState({firstName: e.target.value})
    }

    onLastNameChanged(e) {
        this.setState({lastName: e.target.value})
    }

    onTelephoneChanged(e) {
        this.setState({telephone: e.target.value})
    }

    onEmailChanged(e) {
        this.setState({email: e.target.value})
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
                    size={14}
                    onFieldValueChanged={this.onFirstNameChanged}
                    fieldValue={this.state.firstName}
                />
                <Field 
                    label="Lastname"
                    type="text"
                    editEnabled={editEnabled}
                    className="last-name"
                    size={14}
                    onFieldValueChanged={this.onLastNameChanged}
                    fieldValue={this.state.lastName}
                />
            </div>
                <Field 
                    label="Telephone"
                    type="text"
                    editEnabled={editEnabled}
                    className="telephone"
                    size={20}
                    onFieldValueChanged={this.onTelephoneChanged}
                    fieldValue={this.state.telephone}
                />
                 <Field 
                    label="Email"
                    type="email"
                    editEnabled={editEnabled}
                    className="email"
                    size={35}
                    onFieldValueChanged={this.onEmailChanged}
                    fieldValue={this.state.email}
                />
            </Section>
        )
    }
}

export default PersonalInfoSection;