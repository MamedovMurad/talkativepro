import { useEffect, useState } from "react";
import styles from "./index.module.css";

type CheckBoxProps = {
  text: string;
  id: number|string;
  reverse?: boolean;
  register?:any
};
const delay = 1;
const CheckBox: React.FC<CheckBoxProps> = ({ id, text, reverse, register }) => {
  const [first, setfirst] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setfirst(true), delay * 500);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      <label
        htmlFor={"customCHeckBox-" + id}
        className={`${styles.customcheckbox} ${reverse&& styles.customcheckboxReverse}`}
      >
       {
         register?<input type="checkbox"  value={id} id={"customCHeckBox-" + id}  {...register('checkbox')}/>:
         <input type="checkbox"  value={id} id={"customCHeckBox-" + id}  />
       } 
        <span
          className={styles.checkmark}
          style={{ backgroundColor: first ? "#00C1DD" : "white" }}
        ></span>
        <span className={`${styles.label}`} >{text}</span>
      </label>
    </>
  );
};

export default CheckBox;
