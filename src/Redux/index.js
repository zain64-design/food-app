// Step 1 Create Store

import {createStore,combineReducers} from  'redux';
import productListReducer from './reducers/productList';
import cartReducer from './reducers/cart';
import { composeWithDevTools } from '@redux-devtools/extension';

// here in the store we are importing reducer fn and pass in the store
export const store = createStore(combineReducers({
    products: productListReducer,
    cart: cartReducer,
}),composeWithDevTools());