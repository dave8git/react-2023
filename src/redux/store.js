import { createStore } from 'redux';
import initialState from './initialState';
import { combineReducers } from 'redux';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';
import shortid from 'shortid';

// const reducer = (state, action) => {
//     console.log('action', action);

//     switch (action.type) {
//         case 'ADD_COLUMN':
//             return { ...state, columns: [...state.columns, action.payload] }
//         case 'ADD_CARD':
//             return { ...state, cards: [...state.cards, action.payload] } //zwracamy cały stan oprócz cards (czyli array columns), dalej zastępujemy całą tablicę cards, nową tablicą w której będą dotychczasowe karty + jedna którą dodajem
//          // zwracamy najpierw cały stan (tablice columns i cards) następnie searchString nadpisujemy nowym stringiem w który przyeszedł w akcji
//         case 'ADD_LIST': 
//             return { ...state, lists: [...state.lists, action.payload ]}
//         case 'FAVORITE_CARD': 
//             console.log(state);
//             console.log('action.payload', action.payload);
//             return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) }; // zastąpi tylko to co jest w karcie której id zgadza się z id z playload, i tam zmieni wartość z true na false albo odwrotnie, jeżeli jednak id się nei zgadza to nadpisze kartą ze stanu tak jak była
//         case 'UPDATE_SEARCHSTRING': 
//             return { ...state, searchString: action.payload }
//         default:
//             return state;
//     }
// };

// const listsReducer = (statePart = [], action) => {
//     switch(action.type) {
//       case 'ADD_LIST':
//         return [...statePart, { ...action.payload, id: shortid() }];
//       default:
//         return statePart;
//     }
//   }
  
//   const columnsReducer = (statePart = [], action) => {
//     switch(action.type) {
//       case 'ADD_COLUMN':
//         return [...statePart, { ...action.payload, id: shortid() }];
//       default:
//         return statePart;
//     }
//   }
  
//   const cardsReducer = (statePart = [], action) => {
//     switch(action.type) {
//       case 'ADD_CARD':
//         return [...statePart, { ...action.payload, id: shortid() }];
//       case 'TOGGLE_CARD_FAVORITE':
//         return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
//       default:
//         return statePart;
//     }
//   }
  
//   const searchStringReducer = (statePart = '', action) => {
//     switch(action.type) {
//       case 'UPDATE_SEARCHSTRING':
//         return action.payload
//       default:
//         return statePart;
//     }
//   }

//   const reducer = (state, action) => {
//     const newState = {
//       lists: listsReducer(state.lists, action),
//       columns: columnsReducer(state.columns, action),
//       cards: cardsReducer(state.cards, action),
//       searchString: searchStringReducer(state.searchString, action)
//     };
  
//     return newState;
//   };

const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
  }
  
  const reducer = combineReducers(subreducers);
//export const addList = payload => ({ type: 'ADD_LIST', payload });

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;