import { categoryConstants } from "../actions/constants"

const initialState = {
    categories: [],
    loading : false,
    error : null
}

export const categoryReducer = (state = initialState , action) => {
    switch (action.type){
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST: state = {
            ...state,
            loading : true
        }
        break;
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS : state = {
            loading: false,
            categories : action.payload.categories
        }
        break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE : state = {
            loading: false,
            error : action.payload.error
        }
        break;
        case categoryConstants.ADD_NEW_CATEGORIES_REQUEST: state = {
            ...state,
            loading : true
        }
        break;
        case categoryConstants.ADD_NEW_CATEGORIES_SUCCESS : state = {
            loading: false,
            ...state
        }
        break;
        case categoryConstants.ADD_NEW_CATEGORIES_FAILURE : state = {
            loading: false,
            error : action.payload.error
        }
        break;
    }
    return state;
}

