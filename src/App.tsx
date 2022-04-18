import React from 'react';
import './App.scss';
import Button from './components/button/Button';
import TextBox from './components/textbox/TextBox';

function App() {
  
  return (
    <div className="App">
      <TextBox place_holder='Test' variant='secondary'></TextBox>
    </div>
  );
}

export default App;
