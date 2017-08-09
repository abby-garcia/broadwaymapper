import React, { Component } from 'react';
import './GoogleMap.css';

class GoogleMaps extends Component {
  render() {
    return (
      <div>
				<div className='mapperText right'>
				   <h3>Broadway Show Mapper</h3>
					 <p>Where is the theater?</p>
				</div>
      </div>
    );
  }
}

export default GoogleMaps;


// remember that the content within the return MUST be wrapped in it's own div
//then div it up as much as you want :)
