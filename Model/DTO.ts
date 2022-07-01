import { IProduct } from "./product";

export interface GenericDTO<T> {
    error: null | {
        message: string
    }
    data: T | null
}

export interface GenericListDto<T>{
    entities:T,
    totalCount:number
}
export interface ImeModel {
    uuid: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string | null;
    phoneNumber: null | string;
    teacher:boolean,
    loggedAsTeacher?:boolean
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
    cvFile:string,
    nationalityId:number
}
export interface IDocument{
    id: number,
    fileName: string,
    title: string,
    type: string
}


interface ILevel{
    id:number;
    name:string;
    label:string
}
interface Iparticipants{
    id:number;
    status:string;
    participatedDurationInMinutes:number;
    assestmentValue:number;
    user:ImeModel;
    dateJoined:string
    dateCreated:string
}
export interface IOldDoc{
    id:number,
    title:string;
    plannedStartDate:string;
    startDate:string
    endDate:string
    levelStr:string
    infoVideoLink:string
    leftSeconds:number;
    cancelled:boolean
    level:ILevel
    language:ILanguage
    teacher:ITeacher
    participants:Iparticipants[]
    rating:number
}
export interface IEducation{
    id:number;
    university:String;
    speciality:string
}
interface ITeacherSertification{
    id:number;
    fileName:string;
}
interface ILanguage{
    id:number;
    name:string;
    code:string
}
// teacher dto
export interface ITeacher{
    uuid:string
    firstName:string
    lastName:string
    email:string
    avatar:string
    phoneNumber:string
    languageLevel:string
    loggedAsTeacher:boolean
    rating:number
    isApproved:boolean
    active:boolean
    teacher:boolean
    educations:IEducation[],
    certifications:ITeacherSertification[];
    languages:ILanguage[]
    teacherLanguages:{introduction:string, language:ILanguage}[]
    followerCount:number,
    isFollowedByCurrentUser:null|boolean
}

export interface IContact{
    fbLink:string|null;
    instagramLink:string|null;
    youtubeLink:string|null,
    phoneNumber:string|null,
    email:string|null

}
