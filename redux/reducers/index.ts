import { combineReducers } from "redux";
import { todoReducer } from "./todoReducers";
import {HYDRATE} from "next-redux-wrapper";
import { productReducer } from "./postReducers";
import { categoryReducer } from "./categoryReducers";

const initialState = [];

const rootReducer=  combineReducers({
    todo : todoReducer,
    products: productReducer,
    category:categoryReducer,
})


export const reducer = (state:any, action:any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type IRootState = ReturnType<typeof rootReducer>