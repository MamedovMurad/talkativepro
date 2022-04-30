
import { IProduct } from "../../Model/product";


export enum ProductTypes {
    GET_PRODUCT = 'GET_PRODUCT',
    SORT_PRODUCT = 'SORT_PRODUCT',
    SET_LOADING='SET_LOADING',
    
}

interface IGetProductAction {
    type:ProductTypes.GET_PRODUCT, payload:IProduct[]
}
interface ISetLoading{
    type:ProductTypes.SET_LOADING,
}

export type ProductAction = IGetProductAction|ISetLoading