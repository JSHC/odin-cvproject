import React from 'react';
import '../styles/Section.css';

class Section extends React.Component {
    constructor(props) {
        super(props);
        
        this.onEditButtonClicked = this.onEditButtonClicked.bind(this);
    }

    onEditButtonClicked() {
        this.props.onEditEnabledChanged();
    }

    render() {
            return (
                <div className={`${this.props.className} section`}>
                    <h2>{this.props.title}</h2>
                    {this.props.children && (
                        <div>
                            {this.props.children}
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