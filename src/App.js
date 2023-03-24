import PersonalInfoSection from "./components/PersonalInfoSection";
import React from "react";
import EducationSection from "./components/EducationSection";
import PracticalExperienceSection from "./components/PracticalExperienceSection";
import './styles/App.css';
import ToggleButton from "./components/ToggleButton";

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
      <ToggleButton 
        previewEnabled={this.state.previewEnabled} 
        onToggleChanged={this.onTogglePreviewClicked} />
        <div className="cv-container">
          <PersonalInfoSection previewEnabled={this.state.previewEnabled}/>
          <EducationSection previewEnabled={this.state.previewEnabled}/>
          <PracticalExperienceSection previewEnabled={this.state.previewEnabled}/>
        </div>
      </div>
    );
  }
}

export default App;
