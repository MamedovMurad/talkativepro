import DatePicker from "../../components/UI/datepicker";
import SelectUI from "../../components/UI/Select";
import styles from "./index.module.css";

type SearchTopProps = {
  margin:string
};

const SearchTop: React.FC<SearchTopProps> = ({margin}) => {
  return (
    <div className={styles.SearchTop} style={{margin}}>
      <div className={styles.datePicker}>
        <DatePicker />
      </div>
      <div className={styles.selectLang}>
        <SelectUI value="Söhbətin dili">
          <div>
            <li>İngilis dili</li>
            <li>Alman dili</li>
            <li>Fransız dili</li>
            <li>İngilis dili</li>
            <li>Alman dili</li>
            <li>Fransız dili</li>
          </div>
        </SelectUI>
      </div>
      <div className={styles.selectLang}>
        <SelectUI value="Söhbət səviyyəsi">
          <div>
            <li>Beginner</li>
            <li>Intermediate</li>
            <li>Upper</li>
            <li>İngilis dili</li>
            <li>Alman dili</li>
            <li>Fransız dili</li>
          </div>
        </SelectUI>
      </div>
      <div className={styles.buttonParent}><button></button></div>
    </div>
  );
};

export default SearchTop;
