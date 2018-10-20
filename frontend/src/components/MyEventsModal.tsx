import * as React from 'react';

class MyEventsModal extends React.PureComponent {

  render() {
    return (
      <div id="my-events-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog m-0 mw-100" role="document">
          <div className="modal-content">
            <div className="modal-header background-et">
              <h6 className="modal-title text-white">My events!</h6>
              <button type="button" className="close text-white" data-dismiss="modal"
                      aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body h-100 flex-grow-1">
              <div className="flex-column justify-content-center">
                <h6>Events hosting by me</h6>
                <div className="my-items-">
                  <div className="card">
                    <div
                      className="card-header background-et text-white d-flex justify-content-between">
                      <span className="">Obiadek u Ani xD</span>
                      <span className="">
                                🥟🥟🥟
                            </span>
                    </div>
                    <div className="card-header d-flex justify-content-between">
                            <span>
                                <i className="far fa-clock"/>
                                12.10 15:00PM
                            </span>
                      <span className="">
                                20 PLN
                            </span>
                      <span className="">
                                <i className="fa fa-user"/>
                                2/2
                            </span>
                    </div>
                    <div className="card-body p-2">
                      <h5 className="card-title d-flex justify-content-between">
                        Ania
                        <span><i className="fa fa-utensils"/><i
                          className="fa fa-utensils"/></span>
                      </h5>
                      <p className="card-text">Some quick example text to build on the card title
                        and make up the
                        bulk
                        of the card's content.</p>
                      <div className="d-flex justify-content-around">
                        <a className="btn btn-sm btn-outline-dark" href="#">Edit</a>
                        <a className="btn btn-outline-success btn-sm card-link" href="#">Join</a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <h6>Waiting for acceptance</h6>
                <div className="my-items-acce">
                  <div className="card">
                    <div
                      className="card-header background-et text-white d-flex justify-content-between">
                      <span className="">Obiadek u Ani xD</span>
                      <span className="">
                                🥟🥟🥟
                            </span>
                    </div>
                    <div className="card-header d-flex justify-content-between">
                            <span>
                                <i className="far fa-clock"/>
                                12.10 15:00PM
                            </span>
                      <span className="">
                                20 PLN
                            </span>
                      <span className="">
                                <i className="fa fa-user"/>
                                2/2
                            </span>
                    </div>
                    <div className="card-body p-2">
                      <h5 className="card-title d-flex justify-content-between">
                        Ania
                        <span><i className="fa fa-utensils"/><i className="fa fa-utensils"/></span>
                      </h5>
                      <p className="card-text">Some quick example text to build on the card title
                        and make up the
                        bulk
                        of the card's content.</p>
                      <div className="d-flex justify-content-around">
                        <a className="btn btn-sm btn-outline-dark" href="#">Edit</a>
                        <a className="btn btn-outline-success btn-sm card-link" href="#">Join</a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <h6>Previous events</h6>
                <div className="grayscale">
                  <div className="card">
                    <div
                      className="card-header background-et text-white d-flex justify-content-between">
                      <span className="">Obiadek u Ani xD</span>
                      <span className="">
                                🥟🥟🥟
                            </span>
                    </div>
                    <div className="card-header d-flex justify-content-between">
                            <span>
                                <i className="far fa-clock"/>
                                12.10 15:00PM
                            </span>
                      <span className="">
                                20 PLN
                            </span>
                      <span className="">
                                <i className="fa fa-user"/>
                                2/2
                            </span>
                    </div>
                    <div className="card-body p-2">
                      <h5 className="card-title d-flex justify-content-between">
                        Ania
                        <span><i className="fa fa-utensils"/><i
                          className="fa fa-utensils"/></span>
                      </h5>
                      <p className="card-text">Some quick example text to build on the card
                        title and make up the
                        bulk
                        of the card's content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyEventsModal;
