// Each function is an ActionCreator that return an action object with two properties:
// 1. type property: always uppercase
// 2. payload property (describes the conditions of the action being triggered)

// Note: that the value you use for type and the name of the other property that is returned is important, because you will re-use them in your reducers


// fetchCardsSuccess will be called when the data has been successfully fetched, with the data passed to it as jobs.
export const fetchCardsSuccess = (jobs) => {
  return {
    type: 'FETCH_CARDS_SUCCESS',
    //We'll return an object with a property called jobs whose value will be the array of jobs (ES6 property value shorthand)
    jobs
  };
};

export const selectJobCard = (jobCard) => {
  return {
    type: 'JOBCARD_SELECTED',
    payload: jobCard
  };
};