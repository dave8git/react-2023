

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
  }

  export default searchStringReducer;