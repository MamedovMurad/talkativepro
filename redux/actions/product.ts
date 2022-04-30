import { IDTO } from "../../Model/DTO";
import { IProduct } from "../../Model/product";
import { ProductAction, ProductTypes } from "../types/product";

export const fetchProdutcs = (payload:IProduct[]): ProductAction => {
   return {type:ProductTypes.GET_PRODUCT, payload:payload}
  };