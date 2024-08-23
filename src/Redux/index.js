// Step 1 Create Store

import {createStore} from  'redux';
import productListReducer from './reducers/productList';

// here in the store we are importing reducer fn and pass in the store
export const store = createStore(productListReducer);