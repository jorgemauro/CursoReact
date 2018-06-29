import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
      let menu=['inicio', 'favoritos']
    return (
      <div className="App">
          <Navbar menu={menu}/>
      </div>
    );
  }
}

export default App;
