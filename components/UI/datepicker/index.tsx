import styles from "./index.module.css";
type DatePickerProps = {
    onchange :any
}
 
const DatePicker:React.FC<DatePickerProps> = ({onchange}) => {
    return (
        <>
           <input type="text" onChange={onchange} placeholder="Tarix"  id="date" className={styles.datePicker} onFocus={(e) => (e.target.type = "date")}/>
        </>
    );
}
 
 
export default DatePicker;