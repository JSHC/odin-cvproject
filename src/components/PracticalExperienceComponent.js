import React from 'react';
import Field from './Field';
import '../styles/PracticalExperienceComponent.css';

class PracticalExperienceComponent extends React.Component {

    render() {
        const { editEnabled } = this.props;
        return (
            <div className={this.props.className}>
                <Field 
                    label="Company Name"
                    type="text"
                    editEnabled={editEnabled}
                    className="company-name"
                />
                <Field 
                    label="Position Title"
                    type="text"
                    editEnabled={editEnabled}
                    className="position-title"
                />
                <Field 
                    label="Description"
                    type="text"
                    editEnabled={editEnabled}
                    className="description"
                />
                <Field
                    label="Start Date"
                    type="date"
                    editEnabled={editEnabled}
                    className="start-date"
                />
                <Field
                    label="End Date"
                    type="date"
                    editEnabled={editEnabled}
                    className="end-date"
                />
                {this.props.canRemove && 
                    <button onClick={(e) => this.props.onRemoveButtonClicked(e, this.props.id)}>Remove</button>
                }
            </div>
        )
    }
}

export default PracticalExperienceComponent;