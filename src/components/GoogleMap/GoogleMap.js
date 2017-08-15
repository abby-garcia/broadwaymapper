import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ShowsData from '../BroadwayShows/shows';

import './GoogleMap.css';

const Marker = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {

  state = {
    center: {
      lat: 40.750782, lng: -73.988959
    },
    zoom: 15
  }
  
  render() {
    return (
     <div>
        <div>Map</div>
        <div style={{'width': '100%', 'height': '1000px'}}>
          <GoogleMapReact
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            {ShowsData.map((show) => (
              <Marker
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



// Google API key AIzaSyBXfW8XcDqvlnbJ1OjNrAS4s9KS0Y0ZJlk

// tom chen's google map stuff begins


//tom chen's google map stuff ends
