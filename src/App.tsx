import React from 'react';
import './App.scss';
import Button from './components/button/Button';
import TextBox from './components/textbox/TextBox';
import RadioButton from './components/radio-button/RadioButton';
import RadioButtonItem from './components/radio-button/RadioButtonItem';

function App() {
  function handle_e(e: React.MouseEvent) {
    console.log(e.target)
  }

  return (
    <div className="App">
      <RadioButton >
        <RadioButtonItem onClick={handle_e}></RadioButtonItem>
        <RadioButtonItem onClick={handle_e}></RadioButtonItem>
        <RadioButtonItem onClick={handle_e}></RadioButtonItem>
      </RadioButton>
      <Button text='CLICK ME' onClick={handle_e}></Button>
    </div>
  );
}

export default App;
