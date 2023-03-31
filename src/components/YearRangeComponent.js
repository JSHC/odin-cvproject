import React, { useState } from 'react';
import Field from './Field';
import '../styles/YearRangeComponent.css';
import SelectField from './SelectField';

const YearRangeComponent = (props) => {
    const [startYear, setStartYear] = useState(new Date().getFullYear());
    const [endYear, setEndYear] = useState(new Date().getFullYear());
    const [isCurrent, setIsCurrent] = useState(false);

    const onStartYearChanged = (e) => {
        setStartYear(e.target.value);
    }

    const onEndYearChanged = (e) => {
        setEndYear(e.target.value);
    }

    const onIsCurrentChanged = () => {
        setIsCurrent(!isCurrent);
    }

    const { editEnabled } = props;
    return (
        <div className={`year-range-component ${props.className}`}>
            <SelectField 
                label="Start Year"
                editEnabled={editEnabled}
                className="start-year"
                fieldValue={startYear}
                onFieldValueChanged={onStartYearChanged}
            />
            <span className='divider'>-</span>
            {isCurrent === true ? 
            <span>Current</span>
            :
            <SelectField 
                label="End Year"
                editEnabled={editEnabled}
                className="end-year"
                fieldValue={endYear}
                onFieldValueChanged={onEndYearChanged}
            />
            }
            
            {editEnabled && 
                <Field
                type="checkbox" 
                label="Is current"
                editEnabled={editEnabled}
                className="is-current"
                fieldValue={isCurrent}
                onFieldValueChanged={onIsCurrentChanged}
                />
            }
        </div>
    )
}

export default YearRangeComponent;