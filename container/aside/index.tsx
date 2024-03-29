import { useState } from "react";
import CheckBox from "../../components/UI/Checkbox";
import { ArrowSvg } from "../../svg/ArrowSVG";
import styles from "./index.module.css";
type AsideProps = {
  name: string;
  children: { name: string; code?: string , id:number, selected?:any}[];
  setList?:any
};

const AsideContainer: React.FC<AsideProps> = ({ name, children,  setList }) => {
  const [active, setactive] = useState(true);
  return (
    <div onClick={() => setactive(!active)} className={styles.asideCotainer} style={active ? { maxHeight:'300px' } : {}}>
      <div>
        <p>{name}</p>
        <span style={active ? { transform: "rotate(180deg)" } : {}}>
          <ArrowSvg />
        </span>
      </div>

      {children?.map((item, i) => (
        <CheckBox key={i} text={item.name} id={item.id} group={name} setList={setList} selected={item.selected}/>
      ))}
    </div>
  );
};

export default AsideContainer;
