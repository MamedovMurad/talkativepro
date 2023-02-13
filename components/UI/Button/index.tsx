import styles from './index.module.css'
type ButtonUIProps = {
    height?:string,
    width?:string,
    text:string;
    onclick?:any
    color?:string,
    form?:string,
    icon?:any,
    border?:string
}
 
const ButtonUI:React.FC<ButtonUIProps> = ({icon=<></>,width="116px",height="40px",text, onclick, color='#00C1DD', form, border="none"}) => {
    return (
        <button className={styles.buttonUI} style={{width, height, backgroundColor:color,border}} onClick={onclick} form={form}>
            {text} <span>{icon}</span>
        </button>
    );
}
 
 
export default ButtonUI;