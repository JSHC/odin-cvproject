import Section from "./components/Section";

function App() {
  return (
    <div>
      <Section title="Personal Information" fields={
        [
          {label: 'Firstname', type: 'text'},
          {label: 'Lastname', type: 'text'},
          {label: 'Telephone', type: 'text'},
          {label: 'Email', type: 'email'},
        ]
      }/>
    </div>
  );
}

export default App;
