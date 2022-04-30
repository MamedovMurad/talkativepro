import { ICategory } from "../../Model/DTO";



export enum CategoryTypes {
    GET_CATEGORY = 'GET_CATEGORY',  
}

interface IGetCategoryAction {
    type:CategoryTypes.GET_CATEGORY, payload:ICategory[]
}


export type CategoryAction = IGetCategoryAction