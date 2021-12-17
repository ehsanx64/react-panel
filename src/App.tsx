import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

import logo from './logo.svg';
import './App.css';

function App<FC>() {
  // Configuration
  const firstName: string = 'First Name';
  const secondName: string = 'Second Name';
  const isLogoVisible: boolean = false;

  // Logic
  const [name, setName] = useState<string>(firstName);
  const handleClick = () => {
    setName(name === firstName ? secondName : firstName);
  }

  // View

  const Logo = () => (
    <img src={logo} className="App-logo" alt="logo" />
  );

  return (
    <div className="App">
      <header className="App-header">
        {isLogoVisible ? (<Logo />) : <></>}
        <Button variant="contained" onClick={handleClick}>Toggle</Button>
        <h1>{name}</h1>
      </header>
    </div>
  );
}

export default App;
