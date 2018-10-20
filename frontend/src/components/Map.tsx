import * as React from 'react';
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';

class Map extends React.PureComponent<MapProps> {

  render() {
    const {position, zoom} = this.props;
    return (
      <LeafletMap center={position} zoom={zoom} className="h-100 flex-grow-1" style={{zIndex: 10}}>
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

interface MapProps {
  position: number[];
  zoom: number;
}

export default Map;
