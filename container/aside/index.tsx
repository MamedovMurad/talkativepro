import { useState } from "react";
import CheckBox from "../../components/UI/Checkbox";
import { ArrowSvg } from "../../svg/ArrowSVG";
import styles from "./index.module.css";
type AsideProps = {
  name: string;
  children: { name?: string; label: string }[];
};

const AsideContainer: React.FC<AsideProps> = ({ name, children }) => {
  const [active, setactive] = useState(true);
  return (
    <div onClick={() => setactive(!active)} className={styles.asideCotainer} style={active ? { maxHeight:'300px' } : {}}>
      <div>
        <p>{name}</p>
        <span style={active ? { transform: "rotate(180deg)" } : {}}>
          <ArrowSvg />
        </span>
      </div>

      {children.map((item, i) => (
        <CheckBox key={i} text={item.label} id={item.label} />
      ))}
    </div>
  );
};

export default AsideContainer;
