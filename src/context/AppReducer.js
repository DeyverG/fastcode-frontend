import { AUTH_ERROR, AUTH_SUCCESSFUL, CLEAN_ARRAY_IMAGES, OFF_LOADING, ON_LOADING, SEARCH_TAG_SUCCESSFUL } from "../types";


export const Reducer = (state, action) => {
    switch (action.type) {
        case AUTH_ERROR:
            return {
                ...state,
                authentication: false,
                user: {}
            }
        case AUTH_SUCCESSFUL:
            return {
                ...state,
                authentication: true,
                user: action.payload.user,
                error: null
            }
        case ON_LOADING:
            return {
                ...state,
                spinner: true
            }
        case OFF_LOADING:
            return {
                ...state,
                spinner: false
            }
        case SEARCH_TAG_SUCCESSFUL:
            return{
                ...state,
                images: action.payload
            }
        case CLEAN_ARRAY_IMAGES:
            return{
                ...state,
                images: []
            }
        default:
            return state;
    }
}

export default Reducer;