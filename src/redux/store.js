import { createStore } from 'redux';
import initialState from './initialState';
import { strContaines } from '../utils/strContains';

const reducer = (state, action) => {
    console.log('action', action);

    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, action.payload] }
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, action.payload] } //zwracamy cały stan oprócz cards (czyli array columns), dalej zastępujemy całą tablicę cards, nową tablicą w której będą dotychczasowe karty + jedna którą dodajem
         // zwracamy najpierw cały stan (tablice columns i cards) następnie searchString nadpisujemy nowym stringiem w który przyeszedł w akcji
        case 'UPDATE_SEARCHSTRING': 
            return { ...state, searchString: action.payload }
        default:
            return state;
    }
};

// selectors 
// w poniższej metodzie jest tdestrukturyzacja pierwszego parametru state na cards i searchString
export const getFilteredCards = ({cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContaines(card.title, searchString));//card.title.toLowerCase().includes(searchString.toLowerCase()));
export const getAllColumns = state => state.columns;

// action creators 
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;