import PersonalInfoSection from "./components/PersonalInfoSection";
import React, { useState } from "react";
import EducationSection from "./components/EducationSection";
import PracticalExperienceSection from "./components/PracticalExperienceSection";
import './styles/App.css';
import ToggleButton from "./components/ToggleButton";

const App = () => {
  const [previewEnabled, setPreviewEnabled] = useState(false);

  const togglePreviewClicked = () => {
    setPreviewEnabled(!previewEnabled);
  }

  return (
    <div className="app">
      <div className="app-wrapper">
        <h1>CV Application</h1>
        <div className='preview-container'>
          <span>
          Toggle preview mode
          </span>
          <ToggleButton 
            previewEnabled={previewEnabled} 
            onToggleChanged={togglePreviewClicked} />
          </div>
          <div className="cv-container">
            <PersonalInfoSection previewEnabled={previewEnabled}/>
            <EducationSection previewEnabled={previewEnabled}/>
            <PracticalExperienceSection previewEnabled={previewEnabled}/>
          </div>
        </div>
      </div>
  )
}

export default App;
