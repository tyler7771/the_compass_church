import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _selmaMapOptions = {
  center: {lat: 40.19611161941362, lng: -85.27158695183715},
  zoom: 16
};

let _winchesterMapOptions = {
  center: {lat: 40.171474, lng: -84.9822049},
  zoom: 16
};

let _yorktownMapOptions = {
  center: {lat: 40.21086533153418, lng: -85.48156030220491},
  zoom: 16
};

class CampusMap extends Component {

  componentDidMount() {
    const map = this.refs.map;
    if (this.props.center === "selma") {
      this.map = new google.maps.Map(map, _selmaMapOptions);
      const marker = new google.maps.Marker({
        position: {lat: 40.19611161941362, lng: -85.27158695183715},
        map: this.map
      });
    } else if (this.props.center === "winchester") {
      this.map = new google.maps.Map(map, _winchesterMapOptions);
      const marker = new google.maps.Marker({
        position: {lat: 40.171474, lng: -84.9822049},
        map: this.map
      });
    } else if (this.props.center === "yorktown") {
      this.map = new google.maps.Map(map, _yorktownMapOptions);
      const marker = new google.maps.Marker({
        position: {lat: 40.21086533153418, lng: -85.48156030220491},
        map: this.map
      });
    }

  }

  componentDidUpdate() {
    const map = this.refs.map;
    if(this.props.center === "selma") {
      this.map = new google.maps.Map(map, _selmaMapOptions);
      const marker = new google.maps.Marker({
        position: {lat: 40.19611161941362, lng: -85.27158695183715},
        map: this.map
      });
    } else if (this.props.center === "winchester") {
      this.map = new google.maps.Map(map, _winchesterMapOptions);
      const marker = new google.maps.Marker({
        position: {lat: 40.171474, lng: -84.9822049},
        map: this.map
      });
    } else if (this.props.center === "yorktown") {
      this.map = new google.maps.Map(map, _yorktownMapOptions);
      const marker = new google.maps.Marker({
        position: {lat: 40.21086533153418, lng: -85.48156030220491},
        map: this.map
      });
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleMarkerClick(campus) {
    this.props.router.push(`campuses/${campus.id}`);
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "campuses/new",
      query: coords
    });
  }

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(CampusMap);
