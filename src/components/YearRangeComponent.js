import React from 'react';
import Field from './Field';

class YearRangeComponent extends React.Component {
    render() {
        const { editEnabled } = this.props;
        return (
            <div className='year-range-component'>
                <Field 
                    label="Start Year"
                    type="number"
                    size={5}
                    editEnabled={editEnabled}
                    className="start-year"
                />
                <span>-</span>
                <Field 
                    label="End Year"
                    type="number"
                    size={5}
                    editEnabled={editEnabled}
                    className="end-year"
                />
            </div>
        )
    }
}

export default YearRangeComponent;