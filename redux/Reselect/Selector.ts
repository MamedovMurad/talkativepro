import { createSelector } from "reselect";
import { IRootState } from "../reducers";
import { IState } from "../reducers/todoReducers";


const selectToDoReducer = (store: IRootState) => store.todo;
export const  selectProduct = (store:IRootState)=>store.products

export const selectUserLoading = createSelector(
	[selectToDoReducer],
	todo => todo.posts
);

export const oneUser = createSelector(
    [selectToDoReducer],
   todo=> todo.name
)


// product 


