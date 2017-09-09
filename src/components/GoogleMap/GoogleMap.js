// use Google Map React Package
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ShowsData from '../BroadwayShows/shows';

import './GoogleMap.css';

const Marker = ({ text }) => <div className="markerText">{text}</div>;


class GoogleMaps extends Component {
//this is my default center - Times Square
  state = {
    center: {
      lat: 40.758895,
      lng: -73.985131
    },
    zoom: 17
  }
  // React Life Cycle - the birth and death of component.

  //this function will after render()
  //put click handlers on the pictures to set new state of component
  //this will change long and lat of the center
  componentDidMount() {
       const allShows= document.querySelectorAll('.broadwayBoxStyle');
       //querySelectorAll returns an array
       //ES6... for of - The for...of statement creates a loop iterating over iterable objects
       for (const show of allShows) {
          show.addEventListener('click', () => {
            //used parseFloat because I kept ending up in the Atlantic ocean...bruh.
            const lat = parseFloat(show.querySelector('.lat').innerHTML);
            const lng = parseFloat(show.querySelector('.lng').innerHTML);
            this.setState({
              center: {
                lat: lat,
                lng: lng
              }
            });
          })
        }
  }

  //runs pretty early
  render() {
    return (
     <div>
        <div>Map</div>
        <div style={{'width': '100%', 'height': '500px'}}>
          <GoogleMapReact
            // onChange={this._onChange}
            center={this.state.center}
            zoom={this.state.zoom}
          >
            {ShowsData.map((show) => (
              <Marker
                key={show.showName}
                //put key because react likes to differentiate
                //when you are looping thru data and creating same components
                //Marker is repeated 9 times...so React wants to tell the difference between each
                lat={show.lat}
                lng={show.lng}
                text={show.showName}
              />
    				))}

          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

// export default GoogleMaps;
export default GoogleMaps;


// remember that the content within the return MUST be wrapped in it's own div
//then div it up as much as you want :)
