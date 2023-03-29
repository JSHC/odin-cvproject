import React from 'react';
import Field from './Field';
import '../styles/EducationComponent.css';
import YearRangeComponent from './YearRangeComponent';
import { FaTimesCircle } from 'react-icons/fa';
import IconButton from './IconButton';

class EducationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            education: '',
            schoolName: '',
        }

        this.onEducationChanged = this.onEducationChanged.bind(this);
        this.onSchoolNameChanged = this.onSchoolNameChanged.bind(this);
    }

    onEducationChanged(e) {
        this.setState({education: e.target.value})
    }

    onSchoolNameChanged(e) {
        this.setState({schoolName: e.target.value})
    }

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
                    fieldValue={this.state.education}      
                    onFieldValueChanged={this.onEducationChanged}  
                    />
                    
                <Field 
                    label="School Name"
                    type="text" 
                    className="school-name"
                    editEnabled={editEnabled} 
                    size={35}
                    fieldValue={this.state.schoolName}        
                    onFieldValueChanged={this.onSchoolNameChanged}  
                    />
                <YearRangeComponent 
                    editEnabled={editEnabled}
                    className='education-years'
                />
                {(this.props.canRemove && editEnabled) && 
                    <IconButton
                        className='remove-education-button icon-button-red'
                        onClick={(e) => this.props.onRemoveButtonClicked(e, this.props.id)}
                        text='Remove'
                        icon={<FaTimesCircle />}
                    />
                }
            </div>
        )
    }
}

export default EducationComponent;