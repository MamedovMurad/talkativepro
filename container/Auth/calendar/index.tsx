import  Router  from "next/router";
import { useContext, useEffect, useState } from "react";
import agent from "../../../Api/agent";
import ButtonUI from "../../../components/UI/Button";
import SpinnerLOader from "../../../components/UI/spinner";
import { ICalendar } from "../../../Model/calendar";
import { UserContext } from "../../../pages/_app";
import { ArrowSvg } from "../../../svg/ArrowSVG";
import styles from "./index.module.css";
type CustomCalendarProps = {};

const CustomCalendar: React.FC<CustomCalendarProps> = () => {
  const [data, dispatch] = useContext(UserContext);
  const [calendar, setcalendar] = useState<ICalendar[] | null>(null);
  const [limitStep, setlimitStep] = useState(false);
  const weekDays = [
    "Bazar ertəsi",
    "Çərşənbə axşamı",
    "Çərşənbə",
    "Cümə axşamı",
    "Cümə",
    "Şənbə",
    "Bazar",
  ];
  const weekColor = [{bg:'#E6F9FC', color:'#00C1DD'}, {bg:'#E8FFF1', color:'#60B37E'},
  {bg:'#FFFBEC', color:'#D9BA2C'},{bg:'#FFF0F0', color:'#E15252'},
  {bg:'#ECF0FF', color:'#2F5AE5'}, {bg:'#FAEDFF', color:'#953DBF'}, {bg:'#FDEDDB', color:'#ED9B3A'}]
  const months = 'Yanvar, Fevral, Mart, Aprel, May, İyun, İyul, Avgust, Sentyabr, Oktyabr, Noyabr, Dekabr'
  function checkWeekDay(id: number) {
    if (id < 7) {
      return weekDays[id];
    } else {
      return weekDays[id - 7];
    }
  }
  function checkWeekDayWithSUmmary(id: number) {
    const weeks = checkWeekDay(id);
    const week = weeks.split(" ");
    if (week.length > 1) {
      return week[0][0] + " " + week[1][0];
    } else {
      return week[0][0];
    }
  }
  function liimitDataCLient(id: number) {
    if (!limitStep && id < 7) {
      return true;
    } else if (limitStep && id > 6) {
      return true;
    } else {
      false;
    }
  }
  const fetchCalendarServer = async () => {
    try {
      const calendar = await agent.teacher.calendarList();
      calendar && setcalendar(calendar.data);
      console.log(calendar);
    } catch (error) {}
  };

  async function startTalk(id?:number) {
    if (id) {
      const res = await agent.talk.startConversation(id)
     res?.data&& sessionStorage.setItem('agora_token',res?.data?.token)
      Router.push('/video-call?token='+res?.data?.token+'&chanal='+res.data?.channelId)
      console.log(res);
    }
  
    
  }
  useEffect(() => {
    fetchCalendarServer();
  }, [data]);

  return (
    <div>
        <div className={styles.WrapperArea}>


        <div className={styles.changeHistory}>
        <button>
          {months.split(',')[new Date().getMonth()] +' '+ new Date().getFullYear()}
          <span onClick={() => setlimitStep(false)}>
            <ArrowSvg
              width="20"
              height="20"
              color={limitStep ? "#707070" : "#DDDDDD"}
            />
          </span>
          <span onClick={() => setlimitStep(true)}>
            <ArrowSvg
              width="20"
              height="20"
              color={limitStep ? "#DDDDDD" : "#707070"}
            />
          </span>
        </button>
      </div>
      <ul className={styles.days}>
        {calendar?.map(
          (item, index) =>
            liimitDataCLient(index) && (
              <li key={index}>
                <span>{checkWeekDayWithSUmmary(index)}</span>
                <p>{item.date.split("-")[0]}</p>
              </li>
            )
        )}
      </ul>

      <div className={styles.calendarBodyParent}>
        {calendar?.map(
          (item, indexes) =>
            liimitDataCLient(indexes) && (
              <ul key={indexes} className={styles.calendarBody}>
                {item.hours?.map((item, index) => (
          
                    <li key={index}
                    className={styles.start_item} style={item?.conversation?{background:weekColor[indexes>6?indexes-7:indexes].bg, borderLeft:'2px solid'+weekColor[indexes>6?indexes-7:indexes].color}:{}}>
                  
                      <span>{item.time}</span> 
                      {/* {item.conversation?.title} */}
                      {
                        item.conversation&&  <ButtonUI onclick={()=>startTalk(item.conversation?.id)} text="Başlat"/>
                      }
                 
                  
                    </li>
                  
                ))}
              </ul>
            )
        )}
      </div>

    {/*   {
          calendar&& <div className={styles.loadingSpinner}> <SpinnerLOader/> </div>
      } */}
        </div>

    </div>
  );
};

export default CustomCalendar;
