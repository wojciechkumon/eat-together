import * as React from 'react';
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';

class Map extends React.PureComponent<MapProps> {

  render() {
    const {position, zoom, markers} = this.props;
    return (
      <LeafletMap center={position} zoom={zoom} className="h-100 flex-grow-1" style={{zIndex: 10}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(marker =>
          <Marker key={marker.position} position={position}>
            <Popup>{marker.text}</Popup>
          </Marker>)}
      </LeafletMap>
    )
  }
}

interface MapProps {
  position: number[];
  zoom: number;
  markers: MarkerData[];
}

export interface MarkerData {
  position: number[];
  text: string;
}

export default Map;
