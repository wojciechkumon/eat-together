import * as React from 'react';

class AboutModal extends React.PureComponent {

  render() {
    return (
      <div id="about-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog m-0 mw-100" role="document">
          <div className="modal-content">
            <div className="modal-header background-et">
              <h6 className="modal-title text-white">About</h6>
              <button type="button" className="close text-white" data-dismiss="modal"
                      aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body h-100 flex-grow-1">

              <div className="flex-column text-center">
                <h2>Eat Together</h2>
                <h6>App created for</h6>
                <h5>Mercari Hackaton 2018</h5>
                <h6>by</h6>
                <h5>Black Heron Team</h5>
              </div>
              <hr/>
              <span>
                    Software used :

                </span>
              <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn-outline-info btn btn-secondary"
                        data-dismiss="modal">Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutModal;
