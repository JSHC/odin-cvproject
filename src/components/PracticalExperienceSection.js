import React from 'react';
import Section from './Section';

class PracticalExperienceSection {
    constructor(props) {
        super(props);
        this.state = {editEnabled: true}

        this.onEditEnabledChanged = this.onEditEnabledChanged.bind(this);
    }

    onEditEnabledChanged() {
        this.setState({editEnabled: !this.state.editEnabled})
    }

    render() {
        const { editEnabled } = this.state;
        return (
            <Section
                title="Practical Experience"
                editEnabled={editEnabled}
                onEditEnabledChanged={this.onEditEnabledChanged}
            >
                
            </Section>
        )
    }
}

export default PracticalExperienceSection;