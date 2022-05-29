import { useEffect, useState } from "react";
import agent from "../../../Api/agent";
import SpinnerLOader from "../../../components/UI/spinner";
import { ICalendar } from "../../../Model/calendar";
import { ArrowSvg } from "../../../svg/ArrowSVG";
import styles from "./index.module.css";
type CustomCalendarProps = {};

const CustomCalendar: React.FC<CustomCalendarProps> = () => {
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
  useEffect(() => {
    fetchCalendarServer();
  }, []);

  return (
    <div>
        <div className={styles.WrapperArea}>


        <div className={styles.changeHistory}>
        <button>
          Aprel, 2022
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
          (item, index) =>
            liimitDataCLient(index) && (
              <ul key={index} className={styles.calendarBody}>
                {item.hours?.map((item, index) => (
                  <>
                    <li key={index}>
                      {" "}
                      <span>{item.time}</span> {item.time}
                    </li>
                  </>
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
