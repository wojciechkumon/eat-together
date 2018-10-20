import * as React from 'react';
import {Event} from './EventInterface';

class EventCard extends React.PureComponent<EventCardProps> {
  hostRatingRender = (hostRating) => {
    let result = '';
    for (let i = 0; i < hostRating; i++) {
      result += <i className="fa fa-utensils"/>;
    }
    return result
  };

  render() {
    const {
      event,
      buttons
    } = this.props;

    return (
      <div className="card">
        <div className="card-header background-et text-white d-flex justify-content-between">
          <span>{event.name}</span>
          {/*<span> TODO CATEGORIES </span>*/}
        </div>
        <div className="card-header d-flex justify-content-between">
          <span><i className="far fa-clock"/>{event.dateTime}</span>
          <span>{event.estimatedPrice}</span>
          <span><i className="fa fa-user"/>
            {/*TODO {actualPersonsCount}/*/}
            {event.maxParticipants}
            </span>
        </div>
        <div className="card-body p-2">
          <h5 className="card-title d-flex justify-content-between">
            {/* TODO {hostName}<span>{this.hostRatingRender(hostRating)}</span>*/}
          </h5>
          <p className="card-text">{event.description}</p>
          <div className="d-flex justify-content-around">
            {buttons}
          </div>
        </div>
      </div>
    );
  }
}

interface EventCardProps {
  event: Event,
  buttons: React.ReactNode
}

export default EventCard;
