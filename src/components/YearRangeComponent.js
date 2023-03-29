import React from 'react';
import Field from './Field';
import '../styles/YearRangeComponent.css';
import SelectField from './SelectField';

class YearRangeComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startYear: new Date().getFullYear(),
            endYear: new Date().getFullYear(),
            isCurrent: false
        }

        this.onStartYearChanged = this.onStartYearChanged.bind(this);
        this.onEndYearChanged = this.onEndYearChanged.bind(this);
        this.onIsCurrentChanged = this.onIsCurrentChanged.bind(this);
    }

    onStartYearChanged(e) {
        this.setState({startYear: e.target.value})
    }

    onEndYearChanged(e) {
        this.setState({endYear: e.target.value})
    }

    onIsCurrentChanged(e) {
        this.setState({isCurrent: !this.state.isCurrent})
    }

    render() {
        const { editEnabled } = this.props;
        return (
            <div className={`year-range-component ${this.props.className}`}>
                <SelectField 
                    label="Start Year"
                    editEnabled={editEnabled}
                    className="start-year"
                    fieldValue={this.state.startYear}
                    onFieldValueChanged={this.onStartYearChanged}
                />
                <span className='divider'>-</span>
                {this.state.isCurrent === true ? 
                <span>Current</span>
                :
                <SelectField 
                    label="End Year"
                    editEnabled={editEnabled}
                    className="end-year"
                    fieldValue={this.state.endYear}
                    onFieldValueChanged={this.onEndYearChanged}
                />
                }
                
                {editEnabled && 
                    <Field
                    type="checkbox" 
                    label="Is current"
                    editEnabled={editEnabled}
                    className="is-current"
                    fieldValue={this.state.isCurrent}
                    onFieldValueChanged={this.onIsCurrentChanged}
                    />
                }
            </div>
        )
    }
}

export default YearRangeComponent;