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
import toast from "react-hot-toast";
import { removeCookies } from "cookies-next";
/* import toast from 'react-hot-toast' */

axios.defaults.baseURL =  'https://api.talkative.az/api/v1 '  /* "http://194.147.58.56:8090/api/v1" */;
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getCookie("agent");
  const lang = localStorage.getItem("lang") || "az";
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + token,
      ["Accept-Language"]: lang + "" || "",
    };
  }
  config.headers = {
    ...config.headers,
    ["Accept-Language"]: lang + "" || "",
    ["Content-Type"]: "application/json",
  };
  return config;
});

axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },

  (error: AxiosError) => {
    console.log(error?.response?.data?.message, "iii");

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
      case 401:
        removeCookies("agent");
        break;
      case 404:
        break;
      case 409:
        console.log("409 error");

        break;
      case 500:
        console.log(data);

        break;
    }
    return Promise.reject(error?.response);
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

const Auth = {
  login: (body: { username: string; password: string; teacher: boolean }) =>
    requests.post<GenericDTO<string>>("/auth/login", body),
  getMe: () => requests.get<GenericDTO<ImeModel>>("/users/me"),
  teacherMe: () =>
    requests.get<GenericDTO<ITeacher>>("/teachers/me?detailed=true"),
  register: (body: {
    name: string;
    surname: string;
    email: string;
    password: string;
    teacher: boolean;
  }) => requests.post<GenericDTO<string>>("/auth/registration", body),
  checkActivetion: (body: { code: string; token: string }) =>
    requests.post<
      GenericDTO<{ token: string; tokenDurationInSeconds: number }>
    >("/auth/registration/code", body),
  registerTeacherTwo: (body: ITeacherRegister) =>
    requests.patch<string>("/teachers/me/initialDetails", body),

  again: (body: { token: string }) =>
    requests.post<GenericDTO<string>>("/auth/registration/again", body),
  deleteMe: () => requests.del<GenericDTO<string>>("/users/me"),
  passwordReset: (body: { email: string }) =>
    requests.post<GenericDTO<string>>("/auth/password-reset", body),
  newPass: (body: { password: string }) =>
    requests.put<GenericDTO<boolean>>("/users/f/password", body),
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
      `/public/teachers?limit=${limit}&keyword=${keyword}&offset=${offset}&${languageIds
        .map((n) => `languageIds=${n}`)
        .join("&")}&${nationalityIds
          .map((n) => `nationalityIds=${n}`)
          .join("&")}`
    ),
  calendarList: () =>
    requests.get<GenericDTO<ICalendar[]>>("/teachers/myCalendar"),
  addConvation: (body: any) => requests.post("/conversations", body),
  oldConversations: (limit = 10, offset = 0) =>
    requests.get<GenericDTO<GenericListDto<IOldDoc[]>>>(
      "/teachers/oldConversations?limit=" + limit + "&offset=" + offset
    ),
  single: (uuid: string) =>
    requests.get<GenericDTO<ITeacher>>(`/public/teachers/${uuid}/profile`),
  postPrivateForm: (body: {
    firstName: string;
    lastName: string;
    address: string;
    teacherLanguages: { language: number | string; introduction: string }[];
    avatar?: string | null;
  }) => requests.post<GenericDTO<boolean>>("/teachers/me", body),

  topList: (limit = 10, offset = 0) =>
    requests.get<GenericDTO<ITeacher[]>>(
      `/public/teachers/topList?limit=${limit}&offset=${offset}`
    ),
  certifatePost: (body: { fileName: string }) =>
    requests.post("/teachers/certificates", body),
  certificateRemove: (id: number) =>
    requests.del<GenericDTO<boolean>>("/teachers/certificates/" + id),
  educationPost: (body: {
    university: string;
    speciality: string;
    educationLevel: number;
  }) => requests.post<GenericDTO<boolean>>("/teachers/educations", body),
  educationRemove: (id: number) =>
    requests.del<GenericDTO<boolean>>("/teachers/educations/" + id),
  updateVideoLink: (body: { introductionVideoLink: string }) =>
    requests.put<GenericDTO<boolean>>("/teachers/introductionVideo", body),
  workPost: (body: { workPlace: string; profession: string }) =>
    requests.post<GenericDTO<true>>("/teachers/workExperiences", body),
  workRemove: (id: number) =>
    requests.del<GenericDTO<boolean>>("/teachers/workExperiences/" + id),
  oldTalk:(uuid:string|number)=>requests.get<GenericDTO<GenericListDto<any>>>(`/public/teachers/${uuid}/oldConversations`)
};
const talk = {
  list: (
    languageIds: number[] = [],
    teacherNationalityIds: number[] = [],
    levels: string[] = [],
    date: string = "",
    limit = 10,
    offset = 0,
    teacherUUID:string='',
  ) =>
    requests.get<GenericDTO<any>>(
      `/public/conversations?limit=${limit}&offset=${offset}&teacherUUID=${teacherUUID}&date=${date}&${languageIds
        .map((n, index) => `languageIds=${n}`)
        .join("&")}&${teacherNationalityIds
          .map((n, index) => `teacherNationalityIds=${n}`)
          .join("&")}&${levels.map((n, index) => `levels=${n}`).join("&")}`
    ),
  connect: (body: { url: string, joinHidden: boolean } = { url: '', joinHidden: false }) =>
    requests.post<
      GenericDTO<{ token: string; channelId: string; continueWithCall: true }>
    >(`conversations/${body.url}/join`, body),

  startConversation: (body: { url: number, joinHidden: boolean } = { url: 0, joinHidden: false }) =>
    requests.post<GenericDTO<{ token: string; channelId: string }>>(
      `conversations/${body.url}/join`,
      body
    ),
  checkuseronCoversation: ({
    id,
    agoraUid,
  }: {
    id: number;
    agoraUid: number;
  }) =>
    requests.get<GenericDTO<ImeModel>>(
      `/conversations/${id}/participants/${agoraUid}`
    ),
  stopTalk: (body: { id: number }) =>
    requests.put(`/conversations/${body.id}/complete`, ""),
  assessment: (body: { path: string | number, value: number }) => requests.post(`/conversations/${body.path}/assestments`, body),
  notassestments: () => requests.get<GenericDTO<any>>('/students/notAssessedConversation')

};

const Student = {
  grammerOrLecture: (offset = 0) =>
    requests.get<GenericDTO<GenericListDto<IDocument[]>>>(
      "/public/documentations?limit=10&offset=" + offset
    ),
  followingTeacher: (limit = 10, offset = 0) =>
    requests.get<GenericDTO<GenericListDto<ITeacher[]>>>(
      `/students/followings?limit=${limit}&&offset=${offset}`
    ),
  followTeacherToggle: (body: {
    isFolledByCurrentUser: boolean;
    url: string;
  }) =>
    requests.post(
      `/teachers/${body.url}/followers`,
      body.isFolledByCurrentUser
    ),
  updateStudent: (body: {
    avatar: string;
    firstName: string;
    lastName: string;
  }) => requests.post<GenericDTO<true>>("/users/me", body),
  listTalks: (
    languageIds: number[] = [],
    teacherNationalityIds: number[] = [],
    levels: string[] = [],
    date: string = "",
    type = "ALL",
    limit = 10,
    offset = 0
  ) =>
    requests.get<GenericDTO<any>>(
      `/students/conversations?limit=${limit}&offset=${offset}&type=${type}&date=${date}&${languageIds
        .map((n, index) => `languageIds=${n}`)
        .join("&")}&${teacherNationalityIds
          .map((n, index) => `teacherNationalityIds=${n}`)
          .join("&")}&${levels.map((n, index) => `levels=${n}`).join("&")}`
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
const Subscription = {
  post: (body: { email: string }) => requests.post<GenericDTO<boolean>>('/public/subscriptions', body)
};
const fileUpload_v = (body: any) =>
  requests.post<GenericDTO<string>>("/files", body);

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
  single: () => requests.get<GenericDTO<IContact>>("public/setting"),
  post: (body: {
    fullName: string;
    email: string;
    subject: string;
    body: string;
  }) => requests.post<GenericDTO<boolean>>("public/common/messagesToUs", body),
};
const notification = {
  getCount: () => requests.get<GenericDTO<number>>("/notifications/newCount"),
};
const password = {
  update: (body: { password: string; passwordAgain: string }) =>
    requests.put<GenericDTO<boolean>>("/users/password", body),
};

const socket = {
  list: (chanal: string) => requests.get<GenericDTO<{ _id: string, message: string, date: Date, agoraUid: string | number, sender: string, me?: boolean }[]>>(`https://ws.talkative.az/api/v1/messages?channelId=${chanal}&limit=200&offset=0`)
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
  notification,
  password,
  Subscription,
  socket
};

export default agent;
export const baseImageUrl = `https://api.talkative.az/api/v1/filesDownload/ `; //http://194.147.58.56:8090/api/v1/filesDownload/
