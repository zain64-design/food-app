const initialState = {
    cart: [],
    products: []
}
export default function productListReducer (state= initialState,action) {
    // console.log(action);

    // optional chaining ?
    switch (action?.type) {
        case 'UPDATE_LOADER': {
            const oldState = {...state}
            oldState.isLoading = action.value;
            return oldState;
        }

        case 'UPDATE_ERROR': {
            const oldState = {...state}
            oldState.error = action.value;
            return oldState;
        }

        case 'UPDATE_DATA': {
            const oldState = {...state}
            oldState.products = action.value;
            return oldState;
        }
    
        default:
            return state;
    }
    
    // return state;
}