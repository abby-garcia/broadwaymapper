import React, { Component } from 'react';
import './BroadwayShows.css';
import SingleShow from './SingleShow/SingleShow';
// import ShowsData from '../../../shows.json';


class BroadwayShows extends Component {
  render() {
    return (
      <div className="broadwayShows">
        <SingleShow
					name="Cats"
					pic="images/cats.jpg"
					location=""
				/>
				<SingleShow
					name="Hamilton"
					pic="../images/ham.jpg"
					location=""
				/>

      </div>
    );
  }
}

export default BroadwayShows;

//so this gives the permission to be used in other places

// Line 8 - this is how you call things
