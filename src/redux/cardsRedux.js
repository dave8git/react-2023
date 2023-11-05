import shortid from "shortid";
import { strContaines } from "../utils/strContains";
// selectors
export const getFilteredCards = ({cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContaines(card.title, searchString));//card.title.toLowerCase().includes(searchString.toLowerCase()));
export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const FAVORITE_CARD = createActionName('FAVORITE_CARD');
const DELETE_CARD = createActionName('DELETE_CARD');
console.log(ADD_CARD);
console.log(FAVORITE_CARD);

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const favoriteCard = payload => ({ type: FAVORITE_CARD, payload});
export const deleteCard = payload => ({ type: DELETE_CARD, payload});

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case FAVORITE_CARD:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      case DELETE_CARD: 
        console.log('action.payload in DELTE_CARD', action.payload);
        return statePart.filter((card) => card.id !== action.payload);
      default:
        return statePart;
    }
  }

export default cardsReducer;