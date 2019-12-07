import types from './types';

const initialState = {
  search: '',
  searchResults: []
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case types.SEARCH_UPDATE_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
}