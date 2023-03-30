import React from 'react';

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
                                className={this.props.className + '-textarea'}
                                cols={this.props.cols || 32}
                                rows={this.props.rows || 12}
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