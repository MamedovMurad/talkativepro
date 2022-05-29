interface IHour{
    time: string,
    hour: number,
    editable: boolean,
    conversation: null|any
}
export interface ICalendar{
    date: string,
    hours:IHour[]
}