const {createSlice} = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    // reducers is an function which we can mutate our states. This is a pure functions they can not change the data outside the function.
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            state = state.filter((item) => item.id !== action.payload);
        }
    }
});

// now we need to export add, remove and those 2 we get from cartSlice.actions
export const {add,remove} = cartSlice.actions;
