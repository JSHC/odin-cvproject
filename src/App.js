import PersonalInfoSection from "./components/PersonalInfoSection";
import Education from "./components/Education";
import Section from "./components/Section";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editEnabled: true}
  }

  render() {
    return (
      <div>
        <PersonalInfoSection />
        <Section title="Education"
          editEnabled={this.state.editEnabled}
          onEditEnabledChanged={() => this.setState({editEnabled: !this.state.editEnabled})}>
            <Education editEnabled={this.state.editEnabled} />
        </Section>
      </div>
    );
  }
}

export default App;
