import React from 'react';
import '../styles/TextAreaField.css';

class TextAreaField extends React.Component {
    constructor(props) {
        super(props);

        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(e) {
        this.props.onFieldValueChanged(e);
    }

    render() {
        return (
            <div className={this.props.className + '-container'}>
            {this.props.editEnabled ? 
            (
                <label className={this.props.className + '-label'}>
                    {this.props.label}
                        <div>
                            <textarea 
                                value={this.props.fieldValue}
                                className={`textarea-field ${this.props.className}-textarea`}
                                cols={this.props.cols || 40}
                                rows={this.props.rows || 12}
                                onChange={this.onFieldChange}
                            >
                            </textarea>
                        </div>
                </label>
            )
            :
                <div className={this.props.className}>
                    {this.props.fieldValue}
                </div>
            }
            </div>
        )
    }
}

export default TextAreaField;