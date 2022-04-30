import styles from './index.module.css'
type ButtonUIProps = {
    height?:string,
    width?:string,
    text:string
}
 
const ButtonUI:React.FC<ButtonUIProps> = ({width="116px",height="40px",text}) => {
    return (
        <button className={styles.buttonUI} style={{width, height}}>
            {text}
        </button>
    );
}
 
 
export default ButtonUI;