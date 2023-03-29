import React from 'react';
import EducationComponent from './EducationComponent';
import Section from './Section';
import uniqid from 'uniqid';
import '../styles/EducationSection.css';
import { FaPlusCircle } from 'react-icons/fa';
import IconButton from './IconButton';

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
        const editEnabled = this.state.editEnabled && !this.props.previewEnabled;
        
        return (
            <Section
                title="Education"
                editEnabled={editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
                className="education-section"
                previewEnabled={this.props.previewEnabled}
            >
                {this.state.educations.map((item) => {
                    return <EducationComponent 
                                id={item.id} 
                                editEnabled={editEnabled}
                                onRemoveButtonClicked={this.onRemoveEducation}
                                key={item.id}
                                canRemove={item.canRemove}
                                className="education-component"
                                />;
                })}

                {this.props.previewEnabled === false && 
                    <IconButton
                        className='add-button'
                        onClick={this.onAddButtonClicked}
                        text='Add'
                        icon={<FaPlusCircle />}
                    />
                }
            </Section>
        )
    }
}

export default EducationSection;