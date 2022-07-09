import React, { useEffect, useState } from "react";
import ButtonUI from "../../../components/UI/Button";
import { convertHMS } from "../../../hooks/convertHMS";
import styles from './index.module.css'
interface IContentAuthCalendar{
    leftSeconds?:number
    callback?:any
    title?:string
}
const ContentAuthCalendar = ({leftSeconds, callback, title}:IContentAuthCalendar) => {
    const [second, setsecond] = useState(leftSeconds);
    
   useEffect(() => {
    let id = setInterval(() => {
        second&&second>0&&  setsecond(second-1);
    }, 1000);
    return () => clearInterval(id);
  });

  if (second==0) {

    return <ButtonUI onclick={callback} text="Başlat"/>
  }
  
  return <div className={styles.coversation__content}>
    <label htmlFor="">{title}</label>
   <span> {convertHMS(second)}</span>
  </div>;
};

export default ContentAuthCalendar;
