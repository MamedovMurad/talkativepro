import { useEffect, useState } from "react";
import styles from "./index.module.css";

type CheckBoxProps = {
  text: string;
  id: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({ id, text }) => {
  const [first, setfirst] = useState(false)
  useEffect(() => {
setfirst(!first)
  }, [])
  
  return (
    <>
  {
    first?  <label htmlFor={"customCHeckBox-" + id} className={styles.customcheckbox}>
    <input type="checkbox" name={text} id={"customCHeckBox-" + id}/>
    <span className={styles.checkmark}></span>
    <span className={styles.label}>{text}</span>
  </label>: 'loading'
  }
    </>
  );
};

export default CheckBox;
