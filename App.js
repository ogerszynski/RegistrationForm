// src/App.js
import React from 'react';
import RegistrationForm from './components/RegistrationForm'; // import komponentu RegistrationForm

const App = () => {
  return (
    <div>
      <h1>Formularz rejestracyjny</h1>
      <RegistrationForm /> {/* render komponentu RegistrationForm */}
    </div>
  );
};

export default App;
