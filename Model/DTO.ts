import { IProduct } from "./product";

export interface GenericDTO<T> {
    error: null | {
        message: string
    }
    data: T | null
}

export interface ImeModel {
    uuid: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string | null;
    phoneNumber: null | string;
    teacher:boolean
}
export interface ITariff{

    id:number;
    name:string;
    hoursCount:number;
    order:number;
    price:number;

}
export interface IFaq{
    id:number;
    question:string;
    answer:string
}
export interface ICategory {
    id: number,
    name: string,
    slug: string,
    icon: string
}

export interface ITeacherRegister{
    languageIds:number[],
    cvFile:string
}