import useForInputLabel from '../../../hooks/useInput';
import styles from './index.module.css'
type InputUIProps = {
    id:number;
    name:string
    width?:string;
    label:string;
    type?:string;
    height?:string;
    register?:any,
    value?:string,
    errors?:any,
    max?:any,
    min?:any
}
 
const InputUI:React.FC<InputUIProps> = ({id, width='360px', label,height,type="text",register, name, value, errors, max, min}) => {
    console.log(errors);
    console.log(max,'fasdfasf');
    
   const handleName = useForInputLabel()
    return (
        <div className={styles.inputui}>
            <label htmlFor={`inputUI${id}`}>{label}</label>
           {
               type=='textarea'?    <textarea  max={max} min={min} type={type} id={`inputUI${id}`} style={{width, height}} value={value} {...register&& register(handleName(name),{required:'true'})}  className={(errors&&errors[handleName(name)])?styles.error:''}></textarea> 
               : <input max={max} min={min} type={type} id={`inputUI${id}`} style={{width, height}} value={value} {...register&& register(handleName(name),{required:'true'})}  className={(errors&&errors[handleName(name)])?styles.error:''}/>
           }
        </div>
    );
}
 
 
export default InputUI;