import styles from './index.module.css'
type ButtonUIProps = {
    height?:string,
    width?:string,
    text:string;
    onclick?:any
    color?:string,
    form?:string,
    icon?:any,
    border?:string,
    font?:string
}
 
const ButtonUI:React.FC<ButtonUIProps> = ({font,icon=<></>,width="116px",height="40px",text, onclick, color='#00C1DD', form, border="none"}) => {
    return (
        <button className={styles.buttonUI} style={{width, height, backgroundColor:color,border, color:font}} onClick={onclick} form={form}>
            {text} <span>{icon}</span>
        </button>
    );
}
 
 
export default ButtonUI;