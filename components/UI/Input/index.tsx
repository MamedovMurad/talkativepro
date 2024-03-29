import {  useState } from 'react';
import useForInputLabel from '../../../hooks/useInput';
import { EyeSVG } from '../../../svg/ArrowSVG copy';
import { EyeSvg2 } from '../../../svg/eye2';
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
    min?:any,
    required?:boolean,
    maxlength?:string|number,
    step?:number
}
 
const InputUI:React.FC<InputUIProps> = ({step,id, width='100%', label,height,type="text",register, name, value, errors, max, min, required=true,maxlength}) => {
    console.log(maxlength,'ll');
    
   const [element, setelement] = useState(type)
   const handleName = useForInputLabel()
    return (
        <div className={styles.inputui}>
            <label htmlFor={`inputUI${id}`}>{label}</label>
            {
                type=='password'&& <span className={styles.eye} onClick={()=>setelement(element=='password'?'text':'password')}>
                    {element==='text'?<EyeSVG/>:<EyeSvg2/>}
                    </span>
            }
           {
               type=='textarea'?   
                <textarea  max={max} min={min} type={type} id={`inputUI${id}`} style={{width, height}} value={value} {...register&& register(handleName(name),{required:required})}  className={(errors&&errors[handleName(name)])?styles.error:''}></textarea> 
               : <input  max={max} min={min} type={element} step={step}
               id={`inputUI${id}`}  style={{width, height}} value={value}
                {...register&& register(handleName(name),{required:required})} 
                maxLength={maxlength} className={(errors&&errors[handleName(name)])?styles.error:'tttt'} />
           }
        </div>
    );
}
 
 
export default InputUI;