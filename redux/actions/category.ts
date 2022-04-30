import { ICategory } from "../../Model/DTO";
import { CategoryAction, CategoryTypes } from "../types/category";


export const fetchCategories = (payload:ICategory[]): CategoryAction => {
   return {type:CategoryTypes.GET_CATEGORY, payload:payload}
  };