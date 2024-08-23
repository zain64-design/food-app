// step1 action creators

// 
export const updateLoader = (value)=> {
    return {
        type: 'UPDATE_LOADER',
        value,
    }
}

export const updateError = (value)=> {
    return {
        type: 'UPDATE_ERROR',
        value,
    }
}

export const updateData = (value)=> {
    return {
        type: 'UPDATE_DATA',
        value,
    }
}

export const addToCart = (value)=> {
    return {
        type: 'ADD_TOCART',
        value,
    }
}