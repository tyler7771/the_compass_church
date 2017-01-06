export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    //permanently bind instance methods
    this._createMarkerFromCampus = this._createMarkerFromCampus.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(campuses){
    this.campuses = campuses;
    this._campusesToAdd().forEach(this._createMarkerFromCampus);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _campusesToAdd() {
    const currentCampuses = this.markers.map( marker => marker.campusId );
    return this.campuses.filter( campus => !currentCampuses.includes(campus.id) );
  }

  _markersToRemove(){
    const campusIds = this.campuses.map( campus => campus.id );
    return this.markers.filter( marker => !campusIds.includes(marker.campusId) );
  }

  _createMarkerFromCampus(campus) {
    const pos = new google.maps.LatLng(campus.lat, campus.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      campusId: campus.id
    });
    marker.addListener('click', () => this.handleClick(campus));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
