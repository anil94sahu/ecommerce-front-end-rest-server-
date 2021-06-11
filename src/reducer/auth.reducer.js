import { authConstants } from "../actions/constants"

const initialState = {
    token : null,
    user : {
        firstName : '',
        lastName : '',
        profilePicture :'',
        email : ''
    },
    authenticate: false,
    authenticating : false,
    error : null,
    loading : false,
    message : ''
}

export const authreducer = (state = initialState , action ) => {

    switch (action.type) {
        case authConstants.LOGIN_REQUEST : state = {
            ...state,
            ...action.payload,
            authenticating : true
        }
        break;
        case authConstants.LOGIN_SUCCESS: state = {
            ...state,
            authenticate: true,
            user : action.payload.user,
            token : action.payload.token
        }
        break;   
        case authConstants.LOGIN_FAILURE: state = {
            ...state,
            authenticate: false,
            authenticating : true
        }
        break;
        case authConstants.LOGOUT_REQUEST : state = {
            ...state,
            loading : true
        }
        break;
        case authConstants.LOGOUT_SUCCESS: state = {
            ...initialState
        }
        break;
        case authConstants.LOGOUT_FAILURE: state = {
            ...state,
            error : action.payload.error,
            loading : false,
        }
        break;
    }
    return state;
}