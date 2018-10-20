import * as React from 'react';
import styled from 'styled-components';
import {MyEvent} from './Event';
import FoodCategorySelector from './FoodCategorySelector';

import EventCard from "./EventCard";

class SearchModal extends React.PureComponent<SearchModalProps, SearchModalState> {

  constructor(props: SearchModalProps) {
    super(props);
    this.state = {
      selectedCuisine: undefined,
      price: 25,
      distance: 10,
      days: 15
    }
  }

  toggleRadio = (foodName: string) => {
    const upFoodName = foodName.toUpperCase();
    const selectedCuisine = this.state.selectedCuisine;
    if (selectedCuisine === upFoodName) {
      this.setState({selectedCuisine: undefined})
    } else {
      this.setState({selectedCuisine: upFoodName})
    }
  };

  filterEvents = (): MyEvent[] => {
    const allEvents: MyEvent[] = this.props.allEvents;
    const {selectedCuisine, price} = this.state;
    let filteredEvents = !selectedCuisine ? allEvents
      : allEvents.filter(myEvent => myEvent.event.cuisines.map(x => x.cuisineType).includes(selectedCuisine.toUpperCase()));
    return filteredEvents.filter(myEvent => myEvent.event.estimatedPrice <= price);
  };

  render() {
    const {selectedCuisine, price, distance, days} = this.state;
    const filteredEvents = this.filterEvents();

    const {setMap} = this.props;
    return (
      <SearchModalDialog id="search-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog m-0 mw-100" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Search for yummy food!</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body h-100 flex-grow-1">
              <div id="search-modal-form"
                   className="flex-column justify-content-center collapse show">
                <label className="search-slider d-flex">
                        <span className="justify-content-center">
                            <i className="fa fa-coins fa-2x"/><br/>
                            <small>Cheap</small>
                        </span>
                  <input value={price}
                         onChange={e => this.setState({price: parseInt(e.target.value)})}
                         type="range" className="custom-range" min={1} max={50} step={1}
                         id="customRange1"/>
                  <span className="justify-content-center">
                            <i className="fa fa-money-bill fa-2x"/><br/>
                            <small>Pricey</small>
                        </span>
                </label>
                <label className="search-slider d-flex">
                        <span className="justify-content-center">
                            <i className="fa fa-walking fa-2x"/><br/>
                            <small>Near</small>
                        </span>
                  <input value={distance}
                         onChange={e => this.setState({distance: parseInt(e.target.value)})}
                         type="range" className="custom-range" min={1} max={50} step={1}
                         id="customRange2"/>
                  <span className="justify-content-center">
                            <i className="fa fa-plane fa-2x"/><br/>
                            <small>Far</small>
                        </span>
                </label>
                <label className="search-slider d-flex">
                        <span className="justify-content-center">
                            <i className="fa fa-calendar-minus fa-2x"/><br/>
                            <small>Soon</small>
                        </span>
                  <input value={days}
                         onChange={e => this.setState({days: parseInt(e.target.value)})}
                         type="range" className="custom-range" min={1} max={30} step={1}
                         id="customRange3"/>
                  <span className="justify-content-center">
                            <i className="fa fa-calendar-plus fa-2x"/><br/>
                            <small>Distant</small>
                        </span>
                </label>
                <FoodCategorySelector type="radio"
                                      selected={selectedCuisine ? [selectedCuisine] : []}
                                      toggle={this.toggleRadio}/>
              </div>

              <div className="d-flex flex-nowrap justify-content-center" data-toggle="collapse"
                   data-target="#search-modal-form">
                <hr className="w-100"/>
                <span className="position-absolute">
                        <i className="fa fa-angle-double-up fa-2x"/>
                    </span>
              </div>

              <SearchResult>
                {filteredEvents.map(myEvent =>
                  <EventCard key={myEvent.event.id} myEvent={myEvent} buttons={[
                    () => <a className="btn btn-sm btn-outline-dark" onClick={() => {
                      setMap([myEvent.event.latitude, myEvent.event.longitude], 13);
                      (window as any).$('#search-modal').modal('hide');
                    }} href="#">See on map</a>,
                    () => <a className="btn btn-sm btn-outline-dark" onClick={() => setMap([], 13)} href="#">Details</a>
                  ]}/>
                )}
              </SearchResult>
            </div>
          </div>
        </div>
      </SearchModalDialog>
    );
  }
}

const SearchModalDialog = styled.div`
  .modal-header {
    background-color: #3B653D;
    color: #FFFFFF;
  }

  .modal-header * {
    color: #FFFFFF;
  }

  .modal-content {
    border: 0;
  }
`;

const SearchResult = styled.div`
  .card-header {
    color: #3B653D;
  }
`;

interface SearchModalProps {
  setMap: (position: number[], zoom: number) => void;
  allEvents: MyEvent[];
}

interface SearchModalState {
  selectedCuisine?: string;
  price: number;
  distance: number;
  days: number;
}

export default SearchModal;
