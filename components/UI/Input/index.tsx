import styles from './index.module.css'
type InputUIProps = {
    id:number;
    width?:string;
    label:string;
    type?:string;
    height?:string;
}
 
const InputUI:React.FC<InputUIProps> = ({id, width='360px', label,height,type="text"}) => {
    return (
        <div className={styles.inputui}>
            <label htmlFor={`inputUI${id}`}>{label}</label>
            <input type={type} id={`inputUI${id}`} style={{width, height}}/>
            
        </div>
    );
}
 
 
export default InputUI;