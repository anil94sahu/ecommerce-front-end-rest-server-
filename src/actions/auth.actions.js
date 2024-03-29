import axios from "../helper/axios";
import { authConstants, userConstants } from "./constants"

export const login = (user) => {
    return async (dispatch) => {

        dispatch({type: authConstants.LOGIN_REQUEST, user});
        const res =  await axios.post('/admin/signin', {...user});

        if(res.status == 200){
            const {token, user} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({type: authConstants.LOGIN_SUCCESS, 
                payload: {token, user}})
        } else{
            if(res.status == 400){
                dispatch({type: authConstants.LOGIN_FAILURE, payload: {res}})

            }
        }
      
    }
}

export const signup = (user) => {
    return async (dispatch) => {

        dispatch({type: userConstants.USER_REGISTER_REQUEST, user});
        const res =  await axios.post('/admin/signup', {...user});

        if(res.status == 200){
            const {message} = res.data;
            dispatch({type: userConstants.USER_REGISTER_SUCCESS, 
                payload: {message}})
        } else{
            if(res.status == 400){
                dispatch({type: userConstants.USER_REGISTER_FAILURE, payload: {error : res.data.error}})

            }
        }
      
    }
}

export const isUserLoggedIn = () =>{
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = localStorage.getItem('user');
            dispatch({type: authConstants.LOGIN_SUCCESS, 
                payload: {token, user}})
        } else {
            dispatch({type: authConstants.LOGIN_FAILURE, payload: {error : 'Failed to login'}})
        }
    }
}

export const signout = () => {
    return async dispatch => {
        const res = await axios.post('/admin/signout');
        dispatch({type: authConstants.LOGOUT_REQUEST})
        if(res.status === 200){
            localStorage.clear();
            dispatch({type: authConstants.LOGOUT_SUCCESS})
        } else {
            dispatch({type: authConstants.LOGOUT_FAILURE, payload: {error: res.data.error}})
        }
      
    }
}