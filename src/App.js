import PersonalInfoSection from "./components/PersonalInfoSection";
import React from "react";
import EducationSection from "./components/EducationSection";
import PracticalExperienceSection from "./components/PracticalExperienceSection";

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
        <PracticalExperienceSection />
      </div>
    );
  }
}

export default App;
