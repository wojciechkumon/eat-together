import * as React from 'react';
import {MyEvent} from './Event';
import {foodCategories} from "./foodCategories";

class EventCard extends React.PureComponent<EventCardProps> {
  hostRatingRender = (hostRating) => {
    const result: any = [];
    for (let i = 0; i < hostRating; i++) {
      result.push(() => <i className="fa fa-utensils"/>);
    }
    return result
  };

  render() {
    const {
      myEvent,
      buttons
    } = this.props;

    return (
      <div className="card">
        <div className="card-header background-et text-white d-flex justify-content-between">
          <span>{myEvent.event.name}</span>
          <span>
          {myEvent.event.cuisines.map(couisine =>
            foodCategories.filter(x => x.foodName === couisine.cuisineType).map(foodCategory =>
              foodCategory.foodIcon
            )
          )}
          </span>
        </div>
        <div className="card-header d-flex justify-content-between">
          <span><i className="far fa-clock"/>{myEvent.event.dateTime}</span>
          <span>{myEvent.event.estimatedPrice}</span>
          <span><i className="fa fa-user"/>{myEvent.event.participants.length}/{myEvent.event.maxParticipants}</span>
        </div>
        <div className="card-body p-2">
          <h5 className="card-title d-flex justify-content-between">
            {myEvent.organizer.firstName}<span>{this.hostRatingRender(myEvent.organizer.rating).map((X, i) => <X key={i}/>)}</span>
          </h5>
          <p className="card-text">{myEvent.event.description}</p>
          <div className="d-flex justify-content-around">
            {buttons.map((MyButton, i) => <MyButton key={i}/>)}
          </div>
        </div>
      </div>
    );
  }
}

interface EventCardProps {
  myEvent: MyEvent,
  buttons: any[]
}

export default EventCard;
