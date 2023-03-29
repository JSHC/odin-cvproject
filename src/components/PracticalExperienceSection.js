import React from 'react';
import PracticalExperienceComponent from './PracticalExperienceComponent';
import Section from './Section';
import uniqid from 'uniqid';
import '../styles/PracticalExperienceSection.css';
import { FaPlusCircle } from 'react-icons/fa';
import IconButton from './IconButton';

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
        this.onAddButtonClicked = this.onAddButtonClicked.bind(this);
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

    onAddButtonClicked() {
        this.setState((prevState) => (
            {practicalExperiences: prevState.practicalExperiences.concat(
                {id: uniqid(), canRemove: true}
            )}
        ))
    }

    render() {
        const editEnabled = this.state.editEnabled && !this.props.previewEnabled;
        return (
            <Section
                title="Practical Experience"
                editEnabled={editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
                className="practical-epxerience-section"
                previewEnabled={this.props.previewEnabled}
            >
                {this.state.practicalExperiences.map((item) => {
                    return <PracticalExperienceComponent 
                        id={item.id}
                        editEnabled={editEnabled}
                        onRemoveButtonClicked={this.onRemoveButtonClicked}
                        key={item.id}
                        canRemove={item.canRemove}
                        className="practical-experience-component"
                    />
                })}

                {this.props.previewEnabled === false && 
                    <IconButton
                        className='add-button icon-button-green'
                        onClick={this.onAddButtonClicked}
                        text='Add'
                        icon={<FaPlusCircle />}
                    />
                }
            </Section>
        )
    }
}

export default PracticalExperienceSection;