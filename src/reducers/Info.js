import { ACTION_TYPES } from "../actions/info";
const initialState = {
    list: []
}


export const info = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }            
        default:
            return state
    }
}