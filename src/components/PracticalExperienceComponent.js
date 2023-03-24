import React from 'react';
import Field from './Field';
import '../styles/PracticalExperienceComponent.css';

class PracticalExperienceComponent extends React.Component {

    render() {
        const { editEnabled } = this.props;
        return (
            <div className={this.props.className}>
            <div className='title-company-wrapper'>
                <Field 
                    label="Position Title"
                    type="text"
                    editEnabled={editEnabled}
                    className="position-title"
                    size={25}
                />
                <Field 
                    label="Company Name"
                    type="text"
                    editEnabled={editEnabled}
                    className="company-name"
                    size={35}
                />
            </div>
                <Field 
                    label="Description"
                    type="text"
                    editEnabled={editEnabled}
                    className="description"
                />
                <div className="practical-experience-dates-container">
                    <Field
                        label="Start Date"
                        type="date"
                        editEnabled={editEnabled}
                        className="start-date"
                    />
                    <span>-</span>
                    <Field
                        label="End Date"
                        type="date"
                        editEnabled={editEnabled}
                        className="end-date"
                    />
                </div>
                {this.props.canRemove && 
                    <button onClick={(e) => this.props.onRemoveButtonClicked(e, this.props.id)}>Remove</button>
                }
            </div>
        )
    }
}

export default PracticalExperienceComponent;