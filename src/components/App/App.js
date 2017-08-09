//put all of our components here
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from '../Title/Title';
import BroadwayShows from '../BroadwayShows/BroadwayShows';


class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <BroadwayShows /> 
      </div>
    );
  }
}

export default App;
