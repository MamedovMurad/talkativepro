import useForInputLabel from '../../../hooks/useInput';
import styles from './index.module.css'
type InputUIProps = {
    id:number;
    name:string
    width?:string;
    label:string;
    type?:string;
    height?:string;
    register?:any
}
 
const InputUI:React.FC<InputUIProps> = ({id, width='360px', label,height,type="text",register, name}) => {
   const handleName = useForInputLabel()
    return (
        <div className={styles.inputui}>
            <label htmlFor={`inputUI${id}`}>{label}</label>
            <input type={type} id={`inputUI${id}`} style={{width, height}} {...register&& register(handleName(name))}/>
        </div>
    );
}
 
 
export default InputUI;