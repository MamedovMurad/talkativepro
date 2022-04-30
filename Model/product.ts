import { IImages } from "./image";

export interface IProduct{
    id: number,
    user: string,
    color_code: string,
    type: string,
    category: string,
    name: string,
    slug: string,
    price: number,
    discount: number,
    detail: string,
    images: IImages[],
}


