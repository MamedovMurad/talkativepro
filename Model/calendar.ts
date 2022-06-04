interface IConversation{
    id:number;
    teacher?:any;
    title:string;
    plannedStartDate?:Date|null;
    startDate?:Date;
    endDate?:Date;
    language:string
    level:string;
    levelStr:string;
    infoVideoLink?:string;
    participants?:string;
    leftSeconds?:number;
    cancelled:boolean
}
interface IHour{
    time: string,
    hour: number,
    editable: boolean,
    conversation?:IConversation
}
export interface ICalendar{
    date: string,
    hours:IHour[]
}
