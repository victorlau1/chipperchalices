
//named export https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281

// each function is an ActionCreator that return an action object with two properties:
// 1. type property: always uppercase
// 2. payload property (describes the conditions of the action being triggered)

export const selectJobCard = (jobCard) => {
  return {
    type: 'JOBCARD_SELECTED',
    payload: jobCard
  };
};