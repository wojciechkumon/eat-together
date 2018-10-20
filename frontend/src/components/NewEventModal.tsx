import * as React from 'react';
import FoodCategorySelector from './FoodCategorySelector';

class NewEventModal extends React.PureComponent<{}, NewEventModalState> {
  state = {
    name: '',
    description: '',
    estimatedPrice: 2.50,
    currency: 'USD',
    maxParticipants: 4,
    cuisines: [],
    dateTime: '',
    streetWithNumber: '',
    city: '',
    phoneNumber: '',
    zip: '',
    country: ''
  };

  submit = e => {
    e.preventDefault();
    const {name, description, estimatedPrice, currency, maxParticipants, dateTime, streetWithNumber, city, zip, cuisines} = this.state;
    console.log(name, description, estimatedPrice, currency, maxParticipants, dateTime, streetWithNumber, city, zip, cuisines);
  };

  toggleCheckbox = (foodName: string) => {
    const cuisines: string[] = this.state.cuisines;
    if (cuisines.includes(foodName)) {
      this.setState({cuisines: cuisines.filter(name => name !== foodName)})
    } else {
      this.setState({cuisines: cuisines.concat([foodName])})
    }
  };

  render() {
    // TODO phoneNumber country
    const {name, description, estimatedPrice, currency, maxParticipants, dateTime, streetWithNumber, city, zip, cuisines} = this.state;

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
            <form onSubmit={this.submit}>
              <div className="modal-body h-100 flex-grow-1">
                <div id="new-item-modal-form" className="flex-column justify-content-center">

                  <div className="form-group">
                    <label htmlFor="event-name">Event name</label>
                    <input value={name}
                           onChange={e => this.setState({name: e.target.value})}
                           type="text" className="form-control" id="event-name" aria-describedby=""
                           placeholder="eg Sushi Kushi"/>
                    <small>Use creative name to attract guests</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-name">Description</label>
                    <textarea value={description}
                              onChange={e => this.setState({description: e.target.value})}
                              className="form-control" id="event-description" rows={4}
                              aria-describedby=""
                              placeholder="eg Sushi Kushi"/>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="event-name">Price</label>
                      <div className="input-group">
                        <input value={estimatedPrice}
                               onChange={e => this.setState({estimatedPrice: parseFloat(e.target.value)})}
                               type="number" className="form-control" step={0.10} min={0}
                               aria-label="money" aria-describedby="basic-addon2"/>
                        <select value={currency}
                                onChange={e => this.setState({currency: e.target.value})}
                                className="form-control p-0">
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
                        <input value={maxParticipants}
                               onChange={e => this.setState({maxParticipants: parseInt(e.target.value)})}
                               type="number" className="form-control" name="participants" min="1"
                               max="100" step={1}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label htmlFor="date-time-input">When?</label>
                      <input value={dateTime}
                             onChange={e => this.setState({dateTime: e.target.value})}
                             id="date-time-input" className="form-control p-1" type="datetime-local"
                             name="date-time"/>
                    </div>
                    <div className="col form-group">
                      <label htmlFor="date-time-input">Where?</label>
                      <input value={streetWithNumber}
                             onChange={e => this.setState({streetWithNumber: e.target.value})}
                             className="form-control p-1" type="text"
                             placeholder="Street and Number"/>
                      <div className="input-group">
                        <input value={zip}
                               onChange={e => this.setState({zip: e.target.value})}
                               className="form-control p-1" type="number" placeholder="00-000"/>
                        <input value={city}
                               onChange={e => this.setState({city: e.target.value})}
                               className="form-control p-1" type="text" placeholder="City"/>
                      </div>
                    </div>
                  </div>
                  <label htmlFor="event-category">Categories</label>
                  <FoodCategorySelector type="checkbox" selected={cuisines}
                                        toggle={this.toggleCheckbox}/>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                  <button type="button" className="btn-outline-info btn btn-secondary"
                          data-dismiss="modal">Cancel
                  </button>
                  <button type="submit" className="btn btn-outline-success">Add Event</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

interface NewEventModalState {
  name: string;
  description: string;
  estimatedPrice: number;
  currency: string;
  maxParticipants: number;
  cuisines: string[];
  dateTime: string;
  streetWithNumber: string;
  city: string;
  phoneNumber: string;
  zip: string;
  country: string;
}

export default NewEventModal;
