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

    // console.log(action);

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
            oldState.cart[value['id']] = value;
            return oldState;
        }

        default:
            return state;
    }
}