import React from 'react';
import Field from './Field';
import '../styles/PracticalExperienceComponent.css';
import YearRangeComponent from './YearRangeComponent';
import { FaTimesCircle } from 'react-icons/fa';
import IconButton from './IconButton';
import TextAreaField from './TextAreaField';

class PracticalExperienceComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            positionTitle: '',
            companyName: '',
            description: '',
        }

        this.onPositionTitleChanged = this.onPositionTitleChanged.bind(this);
        this.onCompanyNameChanged = this.onCompanyNameChanged.bind(this);
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
    }

    onPositionTitleChanged(e) {
        this.setState({positionTitle: e.target.value})
    }

    onCompanyNameChanged(e) {
        this.setState({companyName: e.target.value})
    }

    onDescriptionChanged(e) {
        this.setState({description: e.target.value})
    }

    render() {
        const { editEnabled } = this.props;
        return (
            <div className={this.props.className}>
                <Field 
                    label="Position Title"
                    type="text"
                    editEnabled={editEnabled}
                    className="position-title"
                    size={25}
                    fieldValue={this.state.positionTitle}
                    onFieldValueChanged={this.onPositionTitleChanged}
                />
                <Field 
                    label="Company Name"
                    type="text"
                    editEnabled={editEnabled}
                    className="company-name"
                    size={35}
                    fieldValue={this.state.companyName}
                    onFieldValueChanged={this.onCompanyNameChanged}
                />
                <TextAreaField 
                    label="Description"
                    editEnabled={editEnabled}
                    className="description"
                    fieldValue={this.state.description}
                    onFieldValueChanged={this.onDescriptionChanged}
                />
                <YearRangeComponent 
                    editEnabled={editEnabled}
                    className='practical-experience-years'
                />
                {this.props.canRemove && 
                    <IconButton
                        className='remove-practical-experience-button icon-button-red'
                        onClick={(e) => this.props.onRemoveButtonClicked(e, this.props.id)}
                        text='Remove'
                        icon={<FaTimesCircle />}
                    />
                }
            </div>
        )
    }
}

export default PracticalExperienceComponent;