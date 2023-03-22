import React from 'react';
import Field from './Field';
import '../styles/EducationComponent.css';

class EducationComponent extends React.Component {
    render() {
        const { editEnabled } = this.props;
        return (
            <div>
                <Field 
                    label="School Name"
                    type="text" 
                    className="school-name"
                    editEnabled={editEnabled} />
                <Field 
                    label="Education"
                    type="text"
                    className="education"
                    editEnabled={editEnabled} />
                <Field
                    label="Start year"
                    type="number"
                    className="start-year"
                    editEnabled={editEnabled} />
                <Field
                    label="End year"
                    type="number"
                    className="end-year"
                    editEnabled={editEnabled} />
                {this.props.canRemove && 
                <button onClick={(e) => this.props.onRemoveButtonClicked(e, this.props.id)}>Remove</button>
                }
            </div>
        )
    }
}

export default EducationComponent;