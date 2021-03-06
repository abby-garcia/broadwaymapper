import React, { Component } from 'react';
import './SingleShow.css';

// template for what a single show will look like

class SingleShow extends Component {
  render() {
    return (
      <div className="broadwayBoxStyle">
					<div className="showName">
						<p>{this.props.name}</p>
					</div>
					<div className="showPic">
						<img src={this.props.pic}/>
					</div>
					<div className="showLocation">
						<p>{this.props.location}</p>
					</div>
					<div className="lngAndLat">
						<p className="lat">{this.props.lat}</p>
						<p className="lng">{this.props.lng}</p>
					</div>
	  	</div>
    );
  }
}

export default SingleShow;

//so this gives the permission to be used in other places

//How does this know that CAts and Hamilton are getting styled? this.props.name/pic/location object
