import React from 'react';
import '../styles/Section.css';
import IconButton from './IconButton';
import { FaSave, FaEdit } from 'react-icons/fa';

const Section = (props) => {

    const onEditButtonClicked = () => {
        props.onEditEnabledChanged();
    }

    return (
        <div className={`${props.className} section`}>
            <h2 className='section-title'>{props.title}</h2>
            {props.children && (
                <div className='section-content'>
                    {props.children}
                </div>
            )}

            {props.previewEnabled === false && 
                <IconButton 
                    className='save-button'
                    onClick={onEditButtonClicked} 
                    text={props.editEnabled ? 'Save' : 'Edit'}
                    icon={props.editEnabled ? <FaSave /> : <FaEdit />}
                />
            }
        </div>
    )
}

export default Section