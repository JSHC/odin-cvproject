import React from 'react';
import Field from './Field';

class PersonalInfo extends React.Component {
    render() {
        const {editEnabled} = this.props;
        return (
            <div>
                <Field 
                    label="Firstname"
                    type="text"
                    editEnabled={editEnabled}
                />
                <Field 
                    label="Lastname"
                    type="text"
                    editEnabled={editEnabled}
                />
                <Field 
                    label="Telephone"
                    type="text"
                    editEnabled={editEnabled}
                />
                <Field 
                    label="Email"
                    type="text"
                    editEnabled={editEnabled}
                />
            </div>
        )
    }
}

export default PersonalInfo;