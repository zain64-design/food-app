// we created initial state
const initialState = {
    cart: {},
    products: []
}
// we created reducer function and in this fucntion its require state param and 2nd is action
export default function productListReducer(state = initialState, action) {
    // console.log(state);

    // des value from action
    const { value } = action;

    // optional chaining ?
    switch (action?.type) {
        case 'UPDATE_LOADER': {
            const oldState = { ...state }
            oldState.isLoading = action.value;
            return oldState;
        }

        case 'UPDATE_ERROR': {
            const oldState = { ...state }
            oldState.error = action.value;
            return oldState;
        }

        case 'UPDATE_DATA': {
            const oldState = { ...state }
            oldState.products = action.value;
            return oldState;
        }

        case 'UPDATE_CART': {
            const oldState = { ...state }
            oldState.cart = { ...oldState.cart };
            // oldState.cart[value['id']] = value;

            const key = value['id'];

            if (oldState?.cart[key]?.count) {
                oldState.cart[key].count += 1;
            }
            else {
                oldState.cart[key] = {};
                oldState.cart[key].count = 1;
                oldState.cart[key].value = value;
            }
            return oldState;
        }

        case 'REMOVE_CART': {
            // we need to avoid use structuredClone() to make a copy of obj if there is some thing really necessary then we use this otherwise avoid:
            // const oldState = { ...state };
            // now we are creating new reference of cart
            // const oldCart = {...oldState.cart};
            // delete oldCart.cart[value];
            // oldState.cart = {...oldCart};
            const oldState = structuredClone(state);
            delete oldState.cart[value];
            return oldState;
        }

        default:
            return state;
    }
}