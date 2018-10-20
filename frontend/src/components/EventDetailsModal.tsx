import * as React from 'react';
import {MyEvent} from './Event';
import {foodCategories} from "./foodCategories";
import MealItem from "./MealItem";

class EventDetailsModal extends React.PureComponent<EventDetailsModalProps> {

  render() {
    const {myEvent} = this.props;
    return (
      <div id="my-events-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog m-0 mw-100" role="document">
          <div className="modal-content">
            <div className="modal-header background-et">
              <h6 className="modal-title text-white">event.name</h6>
              <button type="button" className="close text-white" data-dismiss="modal"
                      aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body h-100 flex-grow-1">
              <div className="flex-column justify-content-between">
                  <span>
                    {myEvent.event.cuisines.map(couisine =>
                      foodCategories.filter(x => x.foodName === couisine).map(foodCategory =>
                        foodCategory.foodIcon
                      )
                    )}
                  </span>
                <span><i className="far fa-clock"/>{myEvent.event.dateTime}</span>
                <span>{myEvent.event.estimatedPrice}</span>
                <span><i className="fa fa-user"/>{myEvent.event.participants.length}/{myEvent.event.maxParticipants}</span>
              </div>
              <hr/>
              <div className="flex-column justify-content-between">
                <p>{myEvent.event.description}</p>
              </div>
              <hr/>
              <div className="flex-column justify-content-between">
                {myEvent.event.meals.map(meal =>
                  <MealItem meal={meal}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

interface EventDetailsModalProps {
  myEvent: MyEvent;
}

export default EventDetailsModal;
