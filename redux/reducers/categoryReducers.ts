import { ICategory } from "../../Model/DTO";
import { CategoryAction , CategoryTypes} from "../types/category";


const initialState:null|ICategory[] = null

export const categoryReducer = (state=initialState,action:CategoryAction)=>{
    switch (action.type) {
        case CategoryTypes.GET_CATEGORY: 
          return action.payload
 
        default:
            return state;
    }
}