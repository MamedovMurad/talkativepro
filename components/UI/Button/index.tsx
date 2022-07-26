import styles from './index.module.css'
type ButtonUIProps = {
    height?:string,
    width?:string,
    text:string;
    onclick?:any
    color?:string,
    form?:string,
}
 
const ButtonUI:React.FC<ButtonUIProps> = ({width="116px",height="40px",text, onclick, color='#00C1DD', form}) => {
    return (
        <button className={styles.buttonUI} style={{width, height, backgroundColor:color}} onClick={onclick} form={form}>
            {text}
        </button>
    );
}
 
 
export default ButtonUI;