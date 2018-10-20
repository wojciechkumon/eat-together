import * as React from 'react';
import FoodCategorySelector from "./FoodCategorySelector";

class NewEventModal extends React.PureComponent<{}, NewEventModalState> {

  render() {
    return (
      <div id="new-event-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog m-0 mw-100" role="document">
          <div className="modal-content">
            <div className="modal-header background-et">
              <h6 className="modal-title text-white">Cook food and make friends!</h6>
              <button type="button" className="close text-white" data-dismiss="modal"
                      aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body h-100 flex-grow-1">
              <div id="new-item-modal-form" className="flex-column justify-content-center">
                <form>
                  <div className="form-group">
                    <label htmlFor="event-name">Event name</label>
                    <input type="text" className="form-control" id="event-name" aria-describedby=""
                           placeholder="eg Sushi Kushi"/>
                    <small>Use creative name to attract guests</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-name">Description</label>
                    <textarea className="form-control" id="event-description" rows={4}
                              aria-describedby=""
                              placeholder="eg Sushi Kushi"/>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="event-name">Price</label>
                      <div className="input-group">
                        <input type="number" className="form-control" step={0.10}
                               aria-label="money" aria-describedby="basic-addon2"/>
                        <select className="form-control p-0">
                          <option>USD</option>
                          <option>EUR</option>
                          <option>PLN</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="numberOfParticipants">How many people?</label>
                      <div className="btn-group btn-group-toggle d-flex justify-content-between"
                           data-toggle="buttons">
                        <input type="number" className="form-control" name="participants" min="1"
                               max="100" step={1}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label htmlFor="date-time-input">When?</label>
                      <input id="date-time-input" className="form-control p-1" type="datetime-local"
                             name="date-time"/>
                    </div>
                    <div className="col form-group">
                      <label htmlFor="date-time-input">Where?</label>
                      <input className="form-control p-1" type="text"
                             placeholder="Street and Number"/>
                      <div className="input-group">
                        <input className="form-control p-1" type="number" placeholder="00-000"/>
                        <input className="form-control p-1" type="text" placeholder="City"/>
                      </div>
                    </div>
                  </div>
                  <label htmlFor="event-category">Categories</label>
                  <FoodCategorySelector type="checkbox"/>
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button type="button" className="btn-outline-info btn btn-secondary"
                        data-dismiss="modal">Cancel
                </button>
                <button type="button" className="btn btn-outline-success">Add Event</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface NewEventModalState {
  eventName: string;
  description: string;
  estimatedPrice: number;
  currency: string;
  maxParticipants: number;
}

export default NewEventModal;
