import * as React from 'react';
import EventCard from "./EventCard";
import {MyEvent} from "./Event";
import {getCurrentEmail} from '../utils/api';

class MyEventsModal extends React.PureComponent<MyEventsModalProps> {

  render() {
    const {allEvents} = this.props;
    const email = getCurrentEmail();
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
                <h6>Events hosted by me</h6>
                {allEvents.filter(myEvent => myEvent.organizer.username === email).map(myEvent =>
                  <EventCard key={myEvent.event.id} myEvent={myEvent} buttons={[]}/>
                )}
                <hr/>
                <h6>You are participating in</h6>
                {allEvents.filter(myEvent =>
                  myEvent.event.participants.filter(participant => participant.username === email).length > 0)
                  .map(myEvent => <EventCard key={myEvent.event.id} myEvent={myEvent} buttons={[]}/>)
                }
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export interface MyEventsModalProps {
  allEvents: MyEvent[];
}

export default MyEventsModal;
