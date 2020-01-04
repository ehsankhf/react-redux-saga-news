import React from 'react';
import Button from 'react-bootstrap/Button';

import logo from '../../logo.svg';

import './Main.css';

const onClickHandler = e => {
  window.open('https://reactjs.org');
};

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={onClickHandler}>Learn React</Button>
      </header>
    </div>
  );
}

export default Main;
