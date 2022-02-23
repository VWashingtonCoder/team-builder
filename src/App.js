import React, { useState } from 'react';
import './App.css';
import { warTeamList, initialFormValues } from './Data'
import Form from './components/Form'
import Member from './components/Member';


function App() {
  const [team, setTeam] = useState(warTeamList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(null)


  console.log(team)
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue });
  }

   const submitForm = () => {
     const newMember = {
       name: formValues.name.trim(),
       email: formValues.email.trim(),
       role: formValues.role
     }
     
     if (!newMember.name || !newMember.email || !formValues.role) {
       setFormErrors("Please Provide A Valid Name, Email and/or Role");
       return;
     }
     
      setTeam(team.concat(newMember));
      setFormValues(initialFormValues);
      setFormErrors(null);
    }

    


  return (
    <div className="App">
      <header className="App-header">
        <h1>War Team Form App</h1>
        <h2>Welcome to the form to sign up for the Holy Grail War team.</h2> 
        <p>Please enter your name, email, and role below.</p>
      </header>
      
      {formErrors && <h2 className="error">{formErrors}</h2>}
      
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      
      {team.map(member => {
        return (
          <Member key={member.name} profile={member} />
        )})} 
    </div>
  );
}

export default App;
