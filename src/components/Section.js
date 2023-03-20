import React from 'react';
import Field from './Field';

class Section extends React.Component {
    constructor(props) {
        super(props);
        
        this.onEditButtonClicked = this.onEditButtonClicked.bind(this);
    }

    onEditButtonClicked() {
        this.props.onEditEnabledChanged();
    }

    render() {
        const fields = this.props.fields;
            return (
                <div>
                    <h2>{this.props.title}</h2>
                    {fields && 
                    (
                        <div>
                            {fields.map((field) => {
                            return (
                                <Field 
                                    type={field.type} 
                                    label={field.label}
                                    editEnabled={this.props.editEnabled} />
                            )
                            })}

                        </div>
                    )}
                    {this.props.children && (
                        <div>
                            {this.props.children.map((child) => {
                                console.log(child);
                                return (
                                    child
                                )
                            })}
                        </div>
                    )}
                    <button
                        onClick={this.onEditButtonClicked}>
                        {this.props.editEnabled ? 'Save' : 'Edit'}
                    </button>
                </div>
            )
    }
}

export default Section