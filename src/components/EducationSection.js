import React from 'react';
import EducationComponent from './EducationComponent';
import Section from './Section';

class EducationSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {editEnabled: true}
        this.onEditEnabledChanged = this.onEditEnabledChanged.bind(this);
        this.onAddButtonClicked = this.onAddButtonClicked.bind(this);
    }

    onEditEnabledChanged() {
        this.setState({editEnabled: !this.state.editEnabled})
    }

    onAddButtonClicked() {
        console.log('add clicked');
    }

    render() {
        const { editEnabled } = this.state;
        return (
            <Section
                label="Education"
                editEnabled={editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
            >
                <EducationComponent editEnabled={editEnabled} />
                <button onClick={this.onAddButtonClicked} >Add</button>
            </Section>
        )
    }
}

export default EducationSection;