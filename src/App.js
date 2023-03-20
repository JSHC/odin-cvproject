import PersonalInfo from "./components/PersonalInfo";
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
        <Section title="Personal Information" 
          editEnabled={this.state.editEnabled}
          children={[
            <PersonalInfo editEnabled={this.state.editEnabled}/>,
            <Education editEnabled={this.state.editEnabled}/>
          ]} 
          onEditEnabledChanged={() => this.setState({editEnabled: !this.state.editEnabled})}
          />
      </div>
    );
  }
}

export default App;
