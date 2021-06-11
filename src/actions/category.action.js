import axios from "../helper/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
    return async (dispatch) => {
        dispatch({type: categoryConstants.GET_ALL_CATEGORIES_REQUEST});
        const res = await axios.get('category/getCategory');
        if(res.status === 200) {
            const {categoryList} = res.data;
            dispatch({type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS, payload: {categories: categoryList} });
        } else{
            dispatch({type: categoryConstants.GET_ALL_CATEGORIES_FAILURE, payload: {error : res.data.error}});
        }
    }
}

export const addCategory = (category) => {
    return async (dispatch) => {
        dispatch({type: categoryConstants.ADD_NEW_CATEGORIES_REQUEST});
        const res = await axios.post('category/create', category);
        if(res.status === 200) {
            const {category} = res.data;
            dispatch({type: categoryConstants.ADD_NEW_CATEGORIES_SUCCESS, payload: {category: category} });
        }
        else{
            dispatch({type: categoryConstants.ADD_NEW_CATEGORIES_FAILURE, payload: {error : res.data.error}});
        }
    }
}