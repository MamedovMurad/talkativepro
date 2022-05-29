import { useState } from "react";
import { ArrowSvg } from "../../../../svg/ArrowSVG";
import CheckBox from "../../Checkbox";
import styles from "./index.module.css";
type MultiSelectProps = {
  list: { id: number; text: string }[];
  text?: string;
  width?: string;
  register?:any
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  list,
  text = "dil seçimi edin",
  width = "360px",
  register
}) => {
  const [active, setactive] = useState(false);
  return (
    <div className={styles.multiSelect} style={{ width }}>
      <div
        className={styles.mainView}
        onClick={() => {
          setactive(!active);
        }}
      >
        {text}
        <p style={active ? { transform: "rotate(180deg)" } : {}}>
          <ArrowSvg />
        </p>
      </div>

      <ul
        className={styles.list}
        style={!active ? { height: "0px", visibility: "hidden", padding:'0' } : {}}
      >
        {list.map((item) => (
          <li key={item.id}>
            <CheckBox reverse={true} {...item}  register={register}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
