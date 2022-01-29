export const initialState = {
    count: 0
}

const app = (state = initialState, action) =>{
    if(action.type === 'app'){
        return {count: state.count + 1}
    }

    return {...initialState}
}

export default app;