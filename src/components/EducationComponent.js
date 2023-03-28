import React from 'react';
import Field from './Field';
import '../styles/EducationComponent.css';
import YearRangeComponent from './YearRangeComponent';

class EducationComponent extends React.Component {
    render() {
        const editEnabled = this.props.editEnabled && !this.props.previewEnabled;
        return (
            <div className={this.props.className}>
                <Field 
                    label="Education"
                    type="text"
                    className="education"
                    editEnabled={editEnabled} 
                    size={30}                        
                    />
                    
                <Field 
                    label="School Name"
                    type="text" 
                    className="school-name"
                    editEnabled={editEnabled} 
                    size={35}
                    />
                <YearRangeComponent 
                    editEnabled={editEnabled}
                    className='education-years'
                />
                {(this.props.canRemove && editEnabled) && 
                    <button 
                        onClick={(e) => this.props.onRemoveButtonClicked(e, this.props.id)}
                        className="remove-education-button"
                    >
                        Remove
                    </button>
                }
            </div>
        )
    }
}

export default EducationComponent;