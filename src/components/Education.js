import React from 'react';
import Field from './Field';

class Education extends React.Component {
    render() {
        return (
            <div>
                <Field 
                    label="School Name"
                    type="text" 
                    editEnabled={this.props.editEnabled} />
                <Field 
                    label="Education"
                    type="text"
                    editEnabled={this.props.editEnabled} />
                <Field
                    label="Start year"
                    type="number"
                    editEnabled={this.props.editEnabled} />
                <Field
                    label="End year"
                    type="number"
                    editEnabled={this.props.editEnabled} />
            </div>
        )
    }
}

export default Education;