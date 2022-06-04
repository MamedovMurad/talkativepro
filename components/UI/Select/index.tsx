import { useRef, useState } from "react";
import { ArrowSvg } from "../../../svg/ArrowSVG";
import styles from './index.module.css'
type SelectUIProps = {
  value?: string;
  children: React.ReactElement;
  size?: "LG" | "SM" | "MC";
  width?:string;
  custom_element?:React.ReactElement;
  arrow?:boolean
};

const SelectUI: React.FC<SelectUIProps> = ({ value, children, size, custom_element , arrow=true, width='349px'}) => {
  const [toggle, settoggle] = useState(false);
  const first = useRef<any>();
  //elementPositions

  const handleCLick = () => {
    settoggle(!toggle);
    console.log('fsafsdaf');
    
  };
  return (
    <div ref={first} className={`${styles.selectUI}`}  style={{width}} >
      {custom_element}
      <ul onClick={handleCLick} className={toggle?styles.activeU_L:styles.ordinary}>
        { (
          <li className={styles.main}>
            <label htmlFor="dropdown-0">{value} {arrow&&<ArrowSvg color="#C2C2C2"/>}</label>
          </li>
        )}

        {children}
      </ul>
    </div>
  );
};

export default SelectUI;
