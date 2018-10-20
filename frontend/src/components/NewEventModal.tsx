import * as React from 'react';

class NewEventModal extends React.PureComponent {

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
                    <div className="col form-group">
                      <label htmlFor="event-name">Price</label>
                      <div className="input-group">
                        <input type="number" className="form-control" placeholder="0.00"
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <select className="form-control p-0">
                          <option>USD</option>
                          <option>EUR</option>
                          <option>PLN</option>
                        </select>
                      </div>
                    </div>
                    <div className="col form-group">
                      <label htmlFor="event-name">How many people?</label>
                      <div className="btn-group btn-group-toggle d-flex justify-content-between"
                           data-toggle="buttons">
                        <label className="btn btn-secondary p-2">
                          <input type="radio" name="options" id="option1" autoComplete="off"
                                 checked/>1
                        </label>
                        <label className="btn btn-secondary p-2">
                          <input type="radio" name="options" id="option1" autoComplete="off"/>2
                        </label>
                        <label className="btn btn-secondary p-2">
                          <input type="radio" name="options" id="option1" autoComplete="off"/>3
                        </label>
                        <label className="btn btn-secondary p-2">
                          <input type="radio" name="options" id="option1" autoComplete="off"/>4
                        </label>
                        <label className="btn btn-secondary p-2">
                          <input type="radio" name="options" id="option1" autoComplete="off"/>5
                        </label>
                        <label className="btn btn-secondary p-2">
                          <input type="radio" name="options" id="option1" autoComplete="off"/>6
                        </label>
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
                  <div id="event-category"
                       className="categories-slider d-flex btn-group btn-group-toggle"
                       data-toggle="buttons">
                    <label className="btn shadow-none active ">
                      <input type="checkbox" autoComplete="off"/>
                      <span>🥟</span>
                      <br/>
                      <small>Dumplings</small>
                    </label>
                    <label className="btn shadow-none active">
                      <input type="checkbox" autoComplete="off"/>
                      <span>🍰</span>
                      <br/>
                      <small>Cake</small>
                    </label>
                    <label className="btn shadow-none ">
                      <input type="checkbox" autoComplete="off"/>
                      <span>🥩</span>
                      <br/>
                      <small>Steak</small>
                    </label>
                    <label className="btn shadow-none active ">
                      <input type="checkbox" autoComplete="off"/>
                      <span>🍔</span>
                      <br/>
                      <small>Burgers</small>
                    </label>
                    <label className="btn shadow-none active ">
                      <input type="checkbox" autoComplete="off"/>
                      <span>🥢</span>
                      <br/>
                      <small>Asian</small>
                    </label>
                    <label className="btn shadow-none active ">
                      <input type="checkbox" autoComplete="off"/>
                      <span>🥗</span>
                      <br/>
                      <small>Vege</small>
                    </label>
                    <label className="btn shadow-none active ">
                      <input type="checkbox" autoComplete="off"/>
                      <span>🥣</span>
                      <br/>
                      <small>Soup</small>
                    </label>
                    <label className="btn shadow-none active ">
                      <input type="checkbox" autoComplete="off"/>
                      <span>🍝</span>
                      <br/>
                      <small>Pasta</small>
                    </label>
                  </div>
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

export default NewEventModal;
