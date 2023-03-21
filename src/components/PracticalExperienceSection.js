import React from 'react';
import PracticalExperienceComponent from './PracticalExperienceComponent';
import Section from './Section';
import uniqid from 'uniqid';

class PracticalExperienceSection extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            editEnabled: true,
            practicalExperiences: [
                {id: uniqid(), canRemove: false}
            ]
        }

        this.onEditEnabledChanged = this.onEditEnabledChanged.bind(this);
        this.onRemoveButtonClicked = this.onRemoveButtonClicked.bind(this);
    }

    onEditEnabledChanged() {
        this.setState({editEnabled: !this.state.editEnabled})
    }

    onRemoveButtonClicked(e, id) {
        const newPracticalExperiences = this.state.practicalExperiences
        .filter((item) => {
            return id !== item.id;
        })
        this.setState({practicalExperiences: newPracticalExperiences});
    }

    render() {
        const { editEnabled } = this.state;
        return (
            <Section
                title="Practical Experience"
                editEnabled={editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
            >
                {this.state.practicalExperiences.map((item) => {
                    return <PracticalExperienceComponent 
                        id={item.id}
                        editEnabled={this.state.editEnabled}
                        onRemoveButtonClicked={this.onRemoveButtonClicked}
                        key={item.id}
                        canRemove={item.canRemove}
                    />
                })}
            </Section>
        )
    }
}

export default PracticalExperienceSection;