import * as React from 'react';

class Map extends React.PureComponent<MapProps, MapState> {
  private map;
  private markers: any[] = [];
  private lastZoom: any;
  private lastPosition: any;

  componentDidMount() {
    this.map = (window as any).L.map('mapid');
    (window as any).L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGZlZG9yb3dpYXQiLCJhIjoiY2puYnVjbmoxMDd1ejN3b2xrcWVoeWR2aSJ9.9ryAquSevShTqIrxmnL4ag').addTo(this.map);
  }

  render() {
    const {position, zoom, markers} = this.props;
    if (this.map) {
      if (this.lastZoom !== zoom || this.lastPosition !== position) {
        this.map.setView(position, zoom);
        this.lastZoom = zoom;
        this.lastPosition = position;
      }
      if (this.markers.length !== markers.length) {
        this.markers.forEach(m => m.remove());
        this.markers = [];
        markers.map(
          marker => {
            const mark = (window as any).L.marker(marker.position);
            mark.addTo(this.map);
            mark.bindPopup(marker.text);
            this.markers.push(mark);
          }
        );
      }
    }

    return (<div id="mapid" className="h-100 flex-grow-1" style={{zIndex: 10}}/>)
  }
}

interface MapProps {
  position: number[];
  zoom: number;
  markers: MarkerData[];
}

interface MapState {
  markers: any[];
}

export interface MarkerData {
  position: number[];
  text: string;
}

export default Map;
