import styles from "./index.module.css";
type SweetAlertBodyProps = {
    title?:string;
    text?:string
}
 
const SweetAlertBody:React.FC<SweetAlertBodyProps> = ({title="Qeydiyyatınız tamamlandı", text="Sizə uyğun söhbətlərə qoşularaq yeni dillər öyrənin"}) => {
    return (
        <div className={styles.successModalCOntent}>
        <div className={styles.iconArea}>
            <div></div>
        </div>
        <div className={styles.successModalArticel}>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    </div>
    );
}
 
 
export default SweetAlertBody;