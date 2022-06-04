import styles from './index.module.css'
type ButtonUIProps = {
    height?:string,
    width?:string,
    text:string;
    onclick?:any
}
 
const ButtonUI:React.FC<ButtonUIProps> = ({width="116px",height="40px",text, onclick}) => {
    return (
        <button className={styles.buttonUI} style={{width, height}} onClick={onclick}>
            {text}
        </button>
    );
}
 
 
export default ButtonUI;