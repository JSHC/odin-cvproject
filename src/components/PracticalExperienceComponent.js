import React from 'react';
import Field from './Field';

class PracticalExperienceComponent extends React.Component {

    render() {
        const { editEnabled } = this.props;
        return (
            <div>
                <Field 
                    label="Company Name"
                    type="text"
                    editEnabled={editEnabled}
                />
                <Field 
                    label="Position Title"
                    type="text"
                    editEnabled={editEnabled}
                />
                <Field 
                    label="Description"
                    type="text"
                    editEnabled={editEnabled}
                />
                <Field
                    label="Start Date"
                    type="date"
                    editEnabled={editEnabled}
                />
                <Field
                    label="End Date"
                    type="date"
                    editEnabled={editEnabled}
                />
                {this.props.canRemove && 
                    <button onClick={(e) => this.props.onRemoveButtonClicked(e, this.props.id)}>Remove</button>
                }
            </div>
        )
    }
}

export default PracticalExperienceComponent;