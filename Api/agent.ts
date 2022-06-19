import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import {
    GenericDTO,
    GenericListDto,
    IContact,
    IDocument,
    IFaq,
    ImeModel,
    IOldDoc,
    ITariff,
    ITeacher,
    ITeacherRegister,
} from "../Model/DTO";
import { getCookie } from "react-use-cookie";
import { ICalendar } from "../Model/calendar";
import toast from 'react-hot-toast'

export const baseImageUrl = `http://194.147.58.56:8090/api/v1/filesDownload/`;

axios.defaults.baseURL = "http://194.147.58.56:8090/api/v1";
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getCookie("agent");
    const lang = localStorage.getItem('lang')
    if (token){
        config.headers = { ...config.headers, Authorization: "Bearer " + token, ['Accept-Language']:lang+''||'' };
    }
        config.headers = { ...config.headers, ['Accept-Language']:lang+''||'' };    
    return config;
});

axios.interceptors.response.use(
    async (response: AxiosResponse) => {
        return response;
    },

    (error: AxiosError) => {
        toast.error(error.response?.data?.message);
        
        const { data, status, statusText } = error.response!;

  

        switch (status) {
            case 400:
            

                console.log(data);
                if (typeof data === "string") {
                    console.log(statusText);
                }

                if (data.errors) {
                    const modalStateErrors = [];
                    for (const k in data.errors)
                        if (data.errors[k]) {
                            modalStateErrors.push(data.errors[k]);
                        }
                    throw modalStateErrors.flat();
                }
                break;

            case 404:
                break;
            case 409:
                console.log('409 error');
                
                break;
            case 500:
                console.log(data);

                break;
        }
        return Promise.reject(error);
    }
);
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) =>
        axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    patch: <T>(url: string, body: {}) =>
        axios.patch<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Products = {
    list: () => "",
};

const fileUpload = {
    insert: (file: FormData) => requests.post<string>("/files", file),
};
/*     const Positions = {
      list: (limit=10, offset=0)=> requests.get<GenericDTO<IPostions>>(`/positions?limit=${limit}&offset=${offset}`),
      single:(id:number)=> requests.get<GenericDTO<IPositions>>(`/positions/${id}`),
      insert:(body:{name:string, salary:number})=>requests.post<GenericDTO<IPostions>>('/positions',body),
      delete:(id:number)=>requests.del<{data:boolean, message:null|string}>(`/positions/${id}`)
    }
    const Categories={
      list:(limit=10, offset=0)=> requests.get<GenericDTO<ICategory[]>>(`/categories?limit=${limit}&offset=${offset}`)
    }
    const Companies={
      list:(limit=10, offset=0)=> requests.get<GenericDTO<GenericContent<ICompany[]>>>(`/companies?limit=${limit}&offset=${offset}`),
      insert:(body:{name:string, email:string, phoneNumber:string; address:string,logo:string})=>requests.post<GenericDTO<{data:string}>>('/companies',body)
    }
    const Sections={
      list:(limit=10, offset=0)=> requests.get<GenericDTO<GenericContent<ISection[]>>>(`/sections?limit=${limit}&offset=${offset}`)
    }
    const Roles={
      list:(limit=10, offset=0)=> requests.get<GenericDTO<GenericContent<IRole[]>>>(`/roles?limit=${limit}&offset=${offset}`)
    }
    interface Login {
      username: string;
      password: string;
    } */

const Auth = {
    login: (body: { username: string; password: string; teacher: boolean }) =>
        requests.post<GenericDTO<string>>("/auth/login", body),
    getMe: () => requests.get<GenericDTO<ImeModel>>("/users/me"),
    register: (body: {
        name: string;
        surname: string;
        email: string;
        password: string;
        teacher: boolean;
    }) => requests.post<GenericDTO<string>>("/auth/registration", body),
    checkActivetion: (body: { code: string; token: string }) =>
        requests.post<GenericDTO<{token:string, tokenDurationInSeconds:number}>>("/auth/registration/code", body),
    registerTeacherTwo: (body: ITeacherRegister) =>
        requests.patch<string>("/teachers/me/initialDetails", body),
};
const teacher = {
    list: (
        languageIds: number[] = [],
        keyword: string = "",
        nationalityIds: number[] = [],
        limit = 10,
        offset = 0
    ) =>
        requests.get<GenericDTO<GenericListDto<ITeacher[]>>>(
            `/public/teachers?limit=${limit}&keyword=${keyword}&offset=${offset}&${languageIds.map((n) =>`languageIds=${n}`).join("&")}&${nationalityIds.map((n) =>`nationalityIds=${n}`).join("&")}`
        ),
    calendarList: () =>
        requests.get<GenericDTO<ICalendar[]>>("/teachers/myCalendar"),
    addConvation: (body: any) => requests.post("/conversations", body),
    oldConversations: (limit = 10, offset = 0) =>
        requests.get<GenericDTO<GenericListDto<IOldDoc[]>>>(
            "/teachers/oldConversations?=limit" + limit + "&offset=" + offset
        ),
        single:(uuid:string)=>requests.get<GenericDTO<ITeacher>>(`/public/teachers/${uuid}/profile`),
        postPrivateForm:(body:{firstName:string, lastName:string, address:string, teacherLanguages:{language:number|string, introduction:string}[], avatar?:string|null})=>requests.post<GenericDTO<boolean>>('/teachers/me', body),

topList:(limit=10, offset=0)=>requests.get<GenericDTO<ITeacher[]>>(`/public/teachers/topList?limit=${limit}&offset=${offset}`)
    };
const talk = {
    list:(
        languageIds:number[]=[],
        teacherNationalityIds:number[]=[],
        levels:string[]=[],
        date:string='',
        limit = 10,
        offset = 0,
    )=> requests.get<GenericDTO<any>>(
        `/public/conversations?limit=${limit}&offset=${offset}&date=${date}&${languageIds.map((n, index) =>`languageIds=${n}`)
            .join("&")}&${teacherNationalityIds.map((n, index) =>`teacherNationalityIds=${n}`)
            .join("&")}&${levels.map((n, index) =>`levels=${n}`).join("&")}`
    ),
}
const Student = {
    grammerOrLecture: (offset = 0) =>
        requests.get<GenericDTO<GenericListDto<IDocument[]>>>(
            "/public/documentations?limit=10&offset=" + offset
        ),
};
const tariff = {
    list: () => requests.get<GenericDTO<ITariff[]>>("/public/tariffs"),
};
const faq = {
    list: () => requests.get<GenericDTO<IFaq[]>>("/public/faq/questions"),
};
const Common = {
    langList: () =>
        requests.get<GenericDTO<{ id: number; name: string; code: string }[]>>(
            "/public/common/languages"
        ),
    notianal: () =>
        requests.get<GenericDTO<{ id: number; name: string }[]>>(
            "/public/common/nationalities"
        ),
};
const fileUpload_v = (body: any) => requests.post<GenericDTO<string>>("/files", body);

const about = () =>
    requests.get<
        GenericDTO<{
            teacherText: string;
            aboutBottom: string;
            studentText: string;
            aboutTop: string;
        }>
    >("/public/common/about");

    const contact = {
        single:()=>requests.get<GenericDTO<IContact>>('public/setting'),
        post:(body:{fullName:string, email:string, subject:string,body:string})=>requests.post<GenericDTO<boolean>>('public/common/messagesToUs', body)
    }
    const notification = {
        getCount:()=>requests.get<GenericDTO<number>>('notifications/newCount')
    }
const agent = {
    Auth,
    tariff,
    faq,
    about,
    fileUpload_v,
    Common,
    teacher,
    Student,
    talk,
    contact,
    notification
};

export default agent;
