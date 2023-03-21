import React from 'react';
import Field from './Field';

class PracticalExperienceComponent extends React.Component {

    render() {
        return (
            <div>
                <Field 
                    label="Company Name"
                    type="text"
                />
                <Field 
                    label="Position Title"
                    type="text"
                />
                <Field 
                    label="Description"
                    type="text"
                />
                <Field
                    label="Start Date"
                    type="date"
                />
                <Field
                    label="End Date"
                    type="date"
                />
            </div>
        )
    }
}

export default PracticalExperienceComponent;