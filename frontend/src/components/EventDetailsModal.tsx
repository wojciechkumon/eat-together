import * as React from 'react';
import {MyEvent} from './Event';
import {foodCategories} from "./foodCategories";
import MealItem from "./MealItem";

class EventDetailsModal extends React.PureComponent<EventDetailsModalProps> {
  hostRatingRender = (hostRating) => {
    const result: any = [];
    for (let i = 0; i < hostRating; i++) {
      result.push(() => <i className="fa fa-utensils"/>);
    }
    return result
  };

  render() {
    const {myEvent} = this.props;
    if (!myEvent) {
      return null;
    }

    return (
      <div id="event-detail-modal" className="modal fade" tabIndex={-1} role="dialog">
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
                <span>{myEvent.event.estimatedPrice}</span>
                <span><i className="fa fa-user"/>{myEvent.event.participants.length}/{myEvent.event.maxParticipants}</span>
              </div>
              <div className="d-flex justify-content-center">
                <span className="text-center" style={{fontSize: '25pt'}}>
                    {myEvent.event.cuisines.map(couisine =>
                      foodCategories.filter(x => x.foodName.toUpperCase() === couisine.cuisineType).map(foodCategory =>
                        foodCategory.foodIcon
                      )
                    )}
                    </span>
                <hr/>
              </div>
              <div className="justify-content-between">
                <p>{myEvent.event.description}</p>
                <hr/>
              </div>
              <label>Host</label>
              <div className="d-flex flex-nowrap justify-content-between">
                <h4>{myEvent.organizer.firstName}</h4>
                <h4>{this.hostRatingRender(myEvent.organizer.rating).map((X, i) => <X key={i}/>)}                                  </h4>
                <hr/>
              </div>
              <label>Meals</label>
              {myEvent.event.meals.map(meal =>
                <MealItem meal={meal}/>
              )}
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-success" onClick={() => {
                }}>Join!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

interface EventDetailsModalProps {
  myEvent?: MyEvent;
}

export default EventDetailsModal;
