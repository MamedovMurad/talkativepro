
import { TodoAction, TodoTypes } from "../types/todo";

export interface IState{
    name:string;
    posts:number[];
}
const initialState:IState = {
    name:'Tosu',
    posts:[1,2,3,4,5,6,7]
}


export const todoReducer = (state=initialState,action:TodoAction)=>{
    switch (action.type) {
        case TodoTypes.REMOVE_TODO: 
          return {
              ...state,
              posts:[...state.posts].filter(e=>e!==action.payload)
          }
          case TodoTypes.UPDATE_NAME: 
          return {
              ...state,
             name: action.payload
          }
        default:
            return state;
    }
}