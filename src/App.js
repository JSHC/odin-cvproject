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

    this.onTogglePreviewClicked = this.onTogglePreviewClicked.bind(this);
  }

  onTogglePreviewClicked() {
    this.setState({previewEnabled: !this.state.previewEnabled});
  }

  render() {
    return (
      <div className="app">
      <h1>CV Application</h1>
      <label>
      Toggle preview mode
      </label>
      <button className={`toggle-button ${this.state.previewEnabled ? 'enabled' : 'disabled'}`} onClick={this.onTogglePreviewClicked}></button>
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
