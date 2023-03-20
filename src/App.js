import PersonalInfoSection from "./components/PersonalInfoSection";
import React from "react";
import EducationSection from "./components/EducationSection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editEnabled: true}
  }

  render() {
    return (
      <div>
        <PersonalInfoSection />
        <EducationSection />
      </div>
    );
  }
}

export default App;
