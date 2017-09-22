import axios from 'axios';
import { fromStatus } from '../helpers/status.js';

// These functions are Action Creators that each return an Action object with two properties:
// 1. type property: always uppercase string
// 2. payload property (describes the conditions of the action being triggered)

// Note: the value you use for type and the name of the other property that is returned is important, because you will re-use them in your reducers


// fetchCardsSuccess will be called when the data has been successfully fetched.
export const fetchCardsSuccess = (interested, applied, interviewScheduled, interviewed) => {
  return {

    type: 'FETCH_CARDS_SUCCESS',
    //We'll return an object with properties for each of our status lists (ES6 property value shorthand)
    interested,
    applied,
    interviewScheduled,
    interviewed
  };
};

export const cardsAreFetched = (bool) => {
  return {
    type: 'CARDS_ARE_FETCHED',
    fetched: bool
  };
};

export const cardsHasErrored = (bool) => {
  return {
    type: 'CARDS_HAS_ERRORED',
    hasErrored: bool
  };
};


// This action creator is the only one we need to import because it handles dispatching the other action creators

// dispatch(action): this is the only way to trigger a state change. The return value will be considered the next state

export const fetchCards = (status) => {
  console.log('status from ACTION CREATOR', status);
  return (dispatch) => {
    dispatch(cardsAreFetched(true));

    axios.get('/card')
      .then(response => {
        console.log('Axios response.data', response.data);

        let interested = [];
        let applied = [];
        let interviewScheduled = [];
        let interviewed = [];

        // TODO: refactor so the filtering happens in fetchCardsSuccess action creator
        response.data.forEach(jobCard => {
          let status = jobCard.current_status;

          status === 'Interested' ? interested.push(jobCard) :
            status === 'Applied' ? applied.push(jobCard) :
              status === 'Interview Scheduled' ? interviewScheduled.push(jobCard) :
                status === 'Interviewed' ? interviewed.push(jobCard) : jobCard;
        });

        dispatch(fetchCardsSuccess(interested, applied, interviewScheduled, interviewed));
      })
      .catch(error => {
        console.log('uh-oh fetchCards error', error);

        dispatch(cardsHasErrored(true));
      });
  };
};


export const addCardToList = (status, jobCard) => {

  //let stateStatus = fromStatus(status);
  return {
    type: 'ADD_CARD',
    newCardStatus: fromStatus(status),
    newCard: jobCard
  };
};

export const moveCard = (job, lastStatus, nextStatus, lastX, nextX) => {
  // console.log('within moveCard action JOB',job, 'lastStatus:', lastStatus, nextStatus, lastX)

  return (dispatch) => {
    axios.put('/card/update', job)
      .then(function(response) {
        console.log('axios PUT update response from action creator!', response.data);
        dispatch(moveCardStatus(response.data, lastStatus, nextStatus, lastX));
      })
      .catch(function(error) {
        console.log('error from action creator moveCard axios PUT', error);
      });
  };
};

export const moveCardStatus = (job, lastStatus, nextStatus, lastX) => {
  console.log('within moveCardStatus', job, lastStatus, nextStatus);
  return {
    type: 'MOVE_CARD',
    job,
    lastStatus,
    nextStatus,
    lastX
  };
};