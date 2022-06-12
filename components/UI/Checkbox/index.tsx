import { useEffect, useState } from "react";
import styles from "./index.module.css";

type CheckBoxProps = {
  group?:string,
  text: string;
  id: number|string;
  reverse?: boolean;
  register?:any
  setList?:any
  selected?:any
};
const delay = 1;
const CheckBox: React.FC<CheckBoxProps> = ({ id, text, reverse, register, group , setList, selected}) => {
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
        htmlFor={"customCHeckBox-" + group + id}
        className={`${styles.customcheckbox} ${reverse&& styles.customcheckboxReverse}`}
      >
       {
         register?<input type="checkbox"  value={id} id={"customCHeckBox-" + id}  {...register('checkbox')}/>:
         <input type="checkbox"  value={id} id={"customCHeckBox-" + group+  id}   onChange={e=>setList({group,id})} checked={selected}/>
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
