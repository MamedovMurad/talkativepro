import { IProduct } from "./product";

export interface IDTO {
message:null|string;
error:string;
}

export interface ICategory{
    id: number,
    name: string,
    slug: string,
    icon:string
}