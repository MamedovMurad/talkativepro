import { IProduct } from "../../Model/product";
import { ProductAction, ProductTypes } from "../types/product";

const initialState:null|IProduct[] = null

export const productReducer = (state=initialState,action:ProductAction)=>{
    switch (action.type) {
        case ProductTypes.GET_PRODUCT: 
          return action.payload
          case ProductTypes.SET_LOADING: 
          return {
         state:'test'
          }
        default:
            return state;
    }
}