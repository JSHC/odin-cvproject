import React from 'react';
import '../styles/Section.css';
import IconButton from './IconButton';
import { FaSave, FaEdit } from 'react-icons/fa';


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
                    <h2 className='section-title'>{this.props.title}</h2>
                    {this.props.children && (
                        <div className='section-content'>
                            {this.props.children}
                        </div>
                    )}

                    {this.props.previewEnabled === false && 
                        <IconButton 
                            className='save-button'
                            onClick={this.onEditButtonClicked} 
                            text={this.props.editEnabled ? 'Save' : 'Edit'}
                            icon={this.props.editEnabled ? <FaSave /> : <FaEdit />}
                        />
                    }
                </div>
            )
    }
}

export default Section