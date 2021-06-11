import { combineReducers } from "redux";
import { authreducer } from "./auth.reducer";
import { userreducer } from "./user.reducer";
import {categoryReducer } from "./category.reducer";
import {orderReducer} from './order.reducer';
import {productReducer} from './product.reducer'

const rootReducer = combineReducers({
    auth: authreducer,
    user: userreducer,
    category: categoryReducer,
    order: orderReducer,
    product: productReducer
})

export default rootReducer;