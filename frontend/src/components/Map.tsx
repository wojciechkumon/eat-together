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
      <LeafletMap center={position} zoom={13} className="h-100 flex-grow-1" style={{zIndex: 10}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
