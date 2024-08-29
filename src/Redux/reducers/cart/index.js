import * as actions from "../../constants/cart"

const initialState = {
    data: {}
}
export default function cartReducer(state = initialState, action) {
// console.log(state);
    // des value from action
    const { value } = action;
    console.log('cart reducer', action.type);
    
    switch (action?.type) {
        case actions.UPDATE_CART: {
            const oldState = { ...state }
            oldState.data = { ...oldState.data };
            // oldState.data[value['id']] = value;

            const key = value['id'];

            if (oldState?.data[key]?.count) {
                oldState.data[key].count += 1;
            }
            else {
                oldState.data[key] = {};
                oldState.data[key].count = 1;
                oldState.data[key].value = value;
            }
            return oldState;
        }

        case actions.REMOVE_CART: {
            // we need to avoid use structuredClone() to make a copy of obj if there is some thing really necessary then we use this otherwise avoid:
            const oldState = { ...state };
            console.log(oldState);

            // now we are creating new reference of cart
            const oldCart = { ...oldState.data };
            delete oldCart[value];
            oldState.data = { ...oldCart };
            // const oldState = structuredClone(state);
            // delete oldState.data[value];
            return oldState;
        }

        default:
            return state;
    }
}

export const getCartSelector = (state)=> {
    return state?.cart?.data;
}