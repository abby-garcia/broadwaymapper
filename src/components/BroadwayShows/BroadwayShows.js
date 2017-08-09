import React, { Component } from 'react';
import './BroadwayShows.css';
import SingleShow from './SingleShow/SingleShow';


class BroadwayShows extends Component {
  render() {
    return (
      <div className="broadwayShows">
        <SingleShow
			name="Casts"
			pic=""
			location=""
		/> 
		<SingleShow
			name="Hamilton"
			pic=""
			location=""
		/> 
      </div>
    );
  }
}

export default BroadwayShows;

//so this gives the permission to be used in other places

// Line 8 - this is how you call things 