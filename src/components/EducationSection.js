import React from 'react';
import EducationComponent from './EducationComponent';
import Section from './Section';
import uniqid from 'uniqid';

class EducationSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editEnabled: true,
            educations: [{id: uniqid(), canRemove: false}],
        }

        this.onEditEnabledChanged = this.onEditEnabledChanged.bind(this);
        this.onAddButtonClicked = this.onAddButtonClicked.bind(this);
        this.onRemoveEducation = this.onRemoveEducation.bind(this);
    }

    onEditEnabledChanged() {
        this.setState({editEnabled: !this.state.editEnabled})
    }

    onAddButtonClicked() {
        this.addEducation(true)
    }

    addEducation(canRemove) {
        this.setState((prevState) => ({
            educations: prevState.educations.concat({id: uniqid(), canRemove: canRemove})
        }))
    }

    onRemoveEducation(e, id) {
        const newEducations = this.state.educations.filter((item) => {
            return id !== item.id;
        })
        this.setState({educations: newEducations})
    }

    render() {
        const { editEnabled } = this.state;
        
        return (
            <Section
                label="Education"
                editEnabled={editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
            >
                {this.state.educations.map((item) => {
                    return <EducationComponent 
                                id={item.id} 
                                editEnabled={this.state.editEnabled}
                                onRemoveButtonClicked={this.onRemoveEducation}
                                key={item.id}
                                canRemove={item.canRemove}
                                />;
                })}
                <button onClick={this.onAddButtonClicked}>Add</button>
            </Section>
        )
    }
}

export default EducationSection;