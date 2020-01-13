export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

export function SearchResultReducer(state, action) {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return action.payload;

        default:
            return state;
    }
}