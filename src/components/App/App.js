//put all of our components here
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from '../Title/Title';
import BroadwayShows from '../BroadwayShows/BroadwayShows';
import GoogleMaps from '../GoogleMap/GoogleMap';
import Quiz from '../Quiz/Quiz';

class App extends Component {


  render() {
    return (
      <div>
        <Title />
        <BroadwayShows /> 
        <GoogleMaps />
        <Quiz />
      </div>
    );
  }
}

export default App;
