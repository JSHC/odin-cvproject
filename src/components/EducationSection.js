import React from 'react';
import EducationComponent from './EducationComponent';
import Section from './Section';
import uniqid from 'uniqid';

class EducationSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editEnabled: true,
            educations: [],
        }
        this.onEditEnabledChanged = this.onEditEnabledChanged.bind(this);
        this.onAddButtonClicked = this.onAddButtonClicked.bind(this);
    }

    onEditEnabledChanged() {
        this.setState({editEnabled: !this.state.editEnabled})
    }

    onAddButtonClicked() {
        console.log('add clicked');
        this.setState({
            educations: this.state.educations.concat(<EducationComponent editEnabled={this.state.editEnabled} key={uniqid()}/>)
        })
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
                {this.state.educations}
                <button onClick={this.onAddButtonClicked} >Add</button>
            </Section>
        )
    }
}

export default EducationSection;