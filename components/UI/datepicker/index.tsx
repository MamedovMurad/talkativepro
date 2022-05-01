import styles from "./index.module.css";
type DatePickerProps = {}
 
const DatePicker:React.FC<DatePickerProps> = () => {
    return (
        <>
           <input type="date"  id="date" className={styles.datePicker}/>
        </>
    );
}
 
 
export default DatePicker;