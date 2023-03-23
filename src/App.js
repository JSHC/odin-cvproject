import PersonalInfoSection from "./components/PersonalInfoSection";
import React from "react";
import EducationSection from "./components/EducationSection";
import PracticalExperienceSection from "./components/PracticalExperienceSection";
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editEnabled: true,
      previewEnabled: false
    }
  }

  render() {
    return (
      <div className="app">
      <h1>CV Application</h1>
        <div className="cv-container">
          <PersonalInfoSection />
          <EducationSection />
          <PracticalExperienceSection />
        </div>
      </div>
    );
  }
}

export default App;
