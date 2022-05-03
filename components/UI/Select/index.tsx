import { useRef, useState } from "react";
import { ArrowSvg } from "../../../svg/ArrowSVG";
import styles from './index.module.css'
type SelectUIProps = {
  value?: string;
  children: React.ReactElement;
  size?: "LG" | "SM" | "MC";
};

const SelectUI: React.FC<SelectUIProps> = ({ value, children, size }) => {
  const [toggle, settoggle] = useState(false);
  const first = useRef<any>();
  //elementPositions

  const handleCLick = () => {
    settoggle(!toggle);
    console.log('fsafsdaf');
    
  };

  return (
    <div ref={first} className={`${styles.selectUI}`}  >
      <ul onClick={handleCLick} className={toggle?styles.activeU_L:styles.ordinary}>
        { (
          <li className={styles.main}>
            <label htmlFor="dropdown-0">{value} <ArrowSvg color="#C2C2C2"/></label>
          </li>
        )}

        {children}
      </ul>
    </div>
  );
};

export default SelectUI;
