import * as React from 'react';
import styled from 'styled-components';

class SearchModal extends React.PureComponent<{}, SearchModalState> {

  render() {
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
                  <input type="range" className="custom-range" min="0" max="2" id="customRange1"/>
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
                  <input type="range" className="custom-range" min="0" max="2" id="customRange2"/>
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
                  <input type="range" className="custom-range" min="0" max="2" id="customRange3"/>
                  <span className="justify-content-center">
                            <i className="fa fa-calendar-plus fa-2x"/><br/>
                            <small>Distant</small>
                        </span>
                </label>
                <SearchCategory className="categories-slider d-flex btn-group btn-group-toggle"
                                data-toggle="buttons">
                  <label className="btn shadow-none active ">
                    <input type="checkbox" checked autoComplete="off"/>
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
                    <input type="checkbox" checked autoComplete="off"/>
                    <span>🍔</span>
                    <br/>
                    <small>Burgers</small>
                  </label>
                  <label className="btn shadow-none active ">
                    <input type="checkbox" checked autoComplete="off"/>
                    <span>🥢</span>
                    <br/>
                    <small>Asian</small>
                  </label>
                  <label className="btn shadow-none active ">
                    <input type="checkbox" checked autoComplete="off"/>
                    <span>🥗</span>
                    <br/>
                    <small>Vege</small>
                  </label>
                  <label className="btn shadow-none active ">
                    <input type="checkbox" checked autoComplete="off"/>
                    <span>🥣</span>
                    <br/>
                    <small>Soup</small>
                  </label>
                  <label className="btn shadow-none active ">
                    <input type="checkbox" checked autoComplete="off"/>
                    <span>🍝</span>
                    <br/>
                    <small>Pasta</small>
                  </label>
                </SearchCategory>
              </div>

              <div className="d-flex flex-nowrap justify-content-center" data-toggle="collapse"
                   data-target="#search-modal-form">
                <hr className="w-100"/>
                <span className="position-absolute">
                        <i className="fa fa-angle-double-up fa-2x"/>
                    </span>
              </div>

              <SearchResult>
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
                      <a className="btn btn-sm btn-outline-dark" href="#">See on map</a>
                      <a className="btn btn-outline-success btn-sm card-link" href="#">Join</a>
                    </div>
                  </div>
                </div>
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
                      <a className="btn btn-sm btn-outline-dark" href="#">See on map</a>
                      <a className="btn btn-outline-success btn-sm card-link" href="#">Join</a>
                    </div>
                  </div>
                </div>
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

const SearchCategory = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  overflow-scrolling: touch;
`;

const SearchResult = styled.div`
  .card-header {
    color: #3B653D;
  }
`;

interface SearchModalState {
  menuOpen: boolean;
}

export default SearchModal;
