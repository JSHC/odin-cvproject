import React from 'react';
import Field from './Field';

class EducationComponent extends React.Component {
    render() {
        const { editEnabled } = this.props;
        return (
            <div>
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
                <button onClick={this.props.onRemoveButtonClicked}>Remove</button>
            </div>
        )
    }
}

export default EducationComponent;