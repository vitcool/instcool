import React, { Component } from 'react';
import './App.css';

import '../StartPage/StartPage'
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Main/>
      </div>
    );
  }
}

export default (App);

