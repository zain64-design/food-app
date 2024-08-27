import * as actions from "../../constants/productList"
// step1 action creators
 
export const updateLoader = (value)=> {
    return {
        type: actions.UPDATE_LOADER,
        value,
    }
}

export const updateError = (value)=> {
    return {
        type: actions.UPDATE_ERROR,
        value,
    }
}

export const updateData = (value)=> {
    return {
        type: actions.UPDATE_DATA,
        value,
    }
}