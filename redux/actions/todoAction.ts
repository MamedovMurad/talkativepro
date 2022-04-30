import { TodoAction, TodoTypes } from "../types/todo";

export const removeFromCart = (itemId: number): TodoAction => {
  return { type: TodoTypes.REMOVE_TODO, payload: itemId };
};

export const updateName = (payload:string)=>{
  return {type:TodoTypes.UPDATE_NAME, payload}
}