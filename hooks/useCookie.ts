import { useEffect, useState } from "react";








/* export const useCookie = (key: any, defaultValue: any) => {
    const getCookie = () => GetItem(key) || defaultValue;
    const [cookie, setCookie] = useState(getCookie());


    const updateCookie = (value: any, numberOfDays: any) => {
        setCookie(value);
        setItem(key, value, numberOfDays);
    };
    return [cookie, updateCookie];
}; */



   


export const setItem = (key: any, value: any, second: any) => {
    const now = new Date();

    now.setTime(now.getTime()+120000);
    // set the time to be now + numberOfDays
    console.log(now, 'fsafsadfsda');


    /*    document.cookie = `agent=${token};     expires=${now.toUTCString()}; path=/`; */
    document.cookie = `${'agent'}=${'sdfdsgsdfgsdfgfdgdsgfdsgdfsgdfsgdsfgdsfgdsfgdfgsdfgsdgsdfg'};     expires=${now}; path=/`;
};