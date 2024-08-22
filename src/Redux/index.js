import {createStore} from  'redux';
import productListReducer from './reducers/productList';

export const store = createStore(productListReducer);