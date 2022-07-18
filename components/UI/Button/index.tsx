import styles from './index.module.css'
type ButtonUIProps = {
    height?:string,
    width?:string,
    text:string;
    onclick?:any
    color?:string,
}
 
const ButtonUI:React.FC<ButtonUIProps> = ({width="116px",height="40px",text, onclick, color='#00C1DD'}) => {
    return (
        <button className={styles.buttonUI} style={{width, height, backgroundColor:color}} onClick={onclick}>
            {text}
        </button>
    );
}
 
 
export default ButtonUI;