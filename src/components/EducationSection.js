import React from 'react';
import Field from './Field';
import Section from './Section';

class EducationSection extends React.Component {
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
                label="Education"
                editEnabled={editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
            >
                <Field 
                    label="School Name"
                    type="text" 
                    editEnabled={editEnabled} />
                <Field 
                    label="Education"
                    type="text"
                    editEnabled={editEnabled} />
                <Field
                    label="Start year"
                    type="number"
                    editEnabled={editEnabled} />
                <Field
                    label="End year"
                    type="number"
                    editEnabled={editEnabled} />
            </Section>
        )
    }
}

export default EducationSection;