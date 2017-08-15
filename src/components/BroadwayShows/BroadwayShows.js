import React, { Component } from 'react';
import './BroadwayShows.css';
import SingleShow from './SingleShow/SingleShow';
import ShowsData from './shows';

class BroadwayShows extends Component {
  render() {
    return (
      <div className="broadwayShows">
	      {ShowsData.map((show) => (
					<SingleShow
						 name={show.showName}
						 pic={require(`../../images/${show.showPic}`)}
						 location={show.showLocation}
					 />
				))}
      </div>
    );
  }
}

export default BroadwayShows;

//so this gives the permission to be used in other places

// Line 8 - this is how you call things

// we use {} for javascript within jsx
// google mapping again, needs to be returned. this is why () is used.
// `../../images/${show.showPic}` <-- these '' putting variables into strings
//
