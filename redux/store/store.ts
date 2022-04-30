import { applyMiddleware, createStore, compose, Store, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk"
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { IRootState, reducer } from "../reducers"


const middleware = [thunk]

/* const makeStore = () => {
    const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose
  
    return createStore(
        rootReducer,
      composeWithDevTools(applyMiddleware(...middleware))
    )
  } */

const makeStore
  = (context: Context) => createStore(reducer, process.env.NODE_ENV !== 'production' ?
   composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(compose(...middleware)));
/* const store =  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); */
export const wrapper= createWrapper<Store<IRootState>>(makeStore, { debug: true })
export type NextThunkDispatch = ThunkDispatch<IRootState, void, AnyAction>
/* export default store */



