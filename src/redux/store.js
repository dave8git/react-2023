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
        case 'ADD_LIST': 
            return { ...state, lists: [...state.lists, action.payload ]}
        case 'FAVORITE_CARD': 
            console.log(state);
            console.log('action.payload', action.payload);
            return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) }; // zastąpi tylko to co jest w karcie której id zgadza się z id z playload, i tam zmieni wartość z true na false albo odwrotnie, jeżeli jednak id się nei zgadza to nadpisze kartą ze stanu tak jak była
        case 'UPDATE_SEARCHSTRING': 
            return { ...state, searchString: action.payload }
        default:
            return state;
    }
};

// selectors 
// w poniższej metodzie jest tdestrukturyzacja pierwszego parametru state na cards i searchString
export const getFilteredCards = ({cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContaines(card.title, searchString));//card.title.toLowerCase().includes(searchString.toLowerCase()));

export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);
export const showFavoriteCards = (cards) => cards.map(card => console.log(card));

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId == listId);
export const getAllColumns = state => state.columns;
export const getAllLists = state => state.lists;

// action creators 
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const favoriteCard = payload => ({ type: 'FAVORITE_CARD', payload});

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;