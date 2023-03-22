import React from 'react';
import Field from './Field';
import '../styles/EducationComponent.css';

class EducationComponent extends React.Component {
    render() {
        const { editEnabled } = this.props;
        return (
            <div className={this.props.className}>
                <Field 
                    label="Education"
                    type="text"
                    className="education"
                    editEnabled={editEnabled} />
                <Field 
                    label="School Name"
                    type="text" 
                    className="school-name"
                    editEnabled={editEnabled} />
                <div className='years-container'>
                <Field
                    label="Start year"
                    type="number"
                    className="start-year"
                    editEnabled={editEnabled} />
                <span>-</span>
                <Field
                    label="End year"
                    type="number"
                    className="end-year"
                    editEnabled={editEnabled} />
                </div>
                {this.props.canRemove && 
                <button onClick={(e) => this.props.onRemoveButtonClicked(e, this.props.id)}>Remove</button>
                }
            </div>
        )
    }
}

export default EducationComponent;