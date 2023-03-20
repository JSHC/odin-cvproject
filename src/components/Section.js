import React from 'react';
import Field from './Field';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editEnabled: false};
        this.onEditButtonClicked = this.onEditButtonClicked.bind(this);
    }

    onEditButtonClicked() {
        this.setState({editEnabled: !this.state.editEnabled});
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
                            return <Field type={field.type} label={field.label}/>
                            })}
                            <button
                                onClick={this.onEditButtonClicked}>
                                {this.state.editEnabled ? 'Save' : 'Edit'}
                            </button>
                        </div>
                    )}
                </div>
            )
    }
}

export default Section