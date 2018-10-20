import * as React from 'react';
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';

class Map extends React.PureComponent<{}, MapState> {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  };

  render() {
    const position = [51.505, -0.09];
    return (
      <LeafletMap center={position} zoom={13} style={{height: '100vw', zIndex: 10}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br/>Easily customizable.</Popup>
        </Marker>
      </LeafletMap>
    )
  }
}

interface MapState {
  lat: number;
  lng: number;
  zoom: number;
}

export default Map;
