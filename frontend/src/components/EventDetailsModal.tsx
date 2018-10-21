import * as React from 'react';
import {MyEvent} from './Event';
import {foodCategories} from "./foodCategories";
import MealItem from "./MealItem";
import styled from "styled-components";
import {checkStatus, withToken} from "../utils/api";
import {appConfig} from "../config/appConfig";
import {twoDecimalPlaces} from "../utils/prices";

class EventDetailsModal extends React.PureComponent<EventDetailsModalProps> {
  hostRatingRender = (hostRating) => {
    const result: any = [];
    for (let i = 0; i < hostRating; i++) {
      result.push(() => <i className="fa fa-utensils"/>);
    }
    return result
  };

  submit = e => {
    e.preventDefault();
    const {myEvent} = this.props;
    let eventId;
    if (myEvent) {
      eventId = myEvent.event.id
    } else {
      eventId = 0
    }
    fetch(new Request(withToken(appConfig.api.join), {
      method: 'POST',
      body: eventId,
      headers: {'Content-Type': 'application/json'}
    }))
      .then(checkStatus)
      .then(response => {
        (window as any).$('#event-detail-modal').modal('hide');
      })
      .catch(() => console.error('error'));
  };

  render() {
    const {myEvent} = this.props;
    if (!myEvent) {
      return (
        <EventDetailsModalDialog id="event-detail-modal" className="modal fade" tabIndex={-1} role="dialog">
          <div className="modal-dialog m-0 mw-100" role="document">
            <div className="modal-content">
              <div className="modal-header background-et">
                <h6 className="modal-title text-white">Title</h6>
                <button type="button" className="close text-white" data-dismiss="modal"
                        aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </EventDetailsModalDialog>
      );
    }

    return (
      <EventDetailsModalDialog className="modal fade" id="event-detail-modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog m-0 mw-100" role="document">
          <div className="modal-content">
            <div className="modal-header background-et">
              <h6 className="modal-title text-white">{myEvent.event.name}</h6>
              <button type="button" className="close text-white" data-dismiss="modal"
                      aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body h-100 flex-grow-1">
              <div className="d-flex flex-nowrap justify-content-between">
                <span><i className="far fa-clock"/>{myEvent.event.dateTime}</span>
                <span>{twoDecimalPlaces(myEvent.event.estimatedPrice / 100.0)} {myEvent.event.currency}</span>
                <span><i className="fa fa-user"/>{myEvent.event.participants.length}/{myEvent.event.maxParticipants}</span>
              </div>
              <span style={{fontSize: '25pt'}}>
                    {myEvent.event.cuisines.map(couisine =>
                      foodCategories.filter(x => x.foodName.toUpperCase() === couisine.cuisineType).map(foodCategory =>
                        <span key={foodCategory.foodName}>{foodCategory.foodIcon}</span>
                      )
                    )}
                    </span>
              <hr/>

              <p>{myEvent.event.description}</p>
              <hr/>

              <label>Host</label>
              <div className="d-flex flex-nowrap justify-content-between">
                <h4>{myEvent.organizer.firstName}</h4>
                <h4>{this.hostRatingRender(myEvent.organizer.rating).map((X, i) => <X key={i}/>)}                                  </h4>
              </div>
              <hr/>
              <label>Meals</label>
              {myEvent.event.meals.map(meal =>
                <MealItem key={meal.name} meal={meal}/>
              )}

              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-success" onClick={this.submit}>Join!</button>
              </div>
            </div>
          </div>
        </div>
      </EventDetailsModalDialog>
    )
  };
}

const EventDetailsModalDialog = styled.div`
overflow: auto;

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

interface EventDetailsModalProps {
  myEvent?: MyEvent;
}

export default EventDetailsModal;
