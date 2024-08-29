import * as actions from "../../constants/productList"
// we created initial state
const initialState = {
    data: []
}
// we created reducer function and in this fucntion its require state param and 2nd is action
export default function productListReducer(state = initialState, action) {
    // console.log(state);
    const { value } = action;
    console.log('product reducer', action.type);

    // optional chaining ?
    switch (action?.type) {
        case actions.UPDATE_LOADER: {
            const oldState = { ...state }
            oldState.isLoading = action.value;
            return oldState;
        }

        case actions.UPDATE_ERROR: {
            const oldState = { ...state }
            oldState.error = action.value;
            return oldState;
        }

        case actions.UPDATE_DATA: {
            const oldState = { ...state }
            oldState.data = action.value;
            return oldState;
        }

        default:
            return state;
    }
}