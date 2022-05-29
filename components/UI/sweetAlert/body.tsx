import styles from "./index.module.css";
type SweetAlertBodyProps = {}
 
const SweetAlertBody:React.FC<SweetAlertBodyProps> = () => {
    return (
        <div className={styles.successModalCOntent}>
        <div className={styles.iconArea}>
            <div></div>
        </div>
        <div className={styles.successModalArticel}>
            <h5>Qeydiyyatınız tamamlandı</h5>
            <p>Sizə uyğun söhbətlərə qoşularaq yeni dillər öyrənin</p>
        </div>
    </div>
    );
}
 
 
export default SweetAlertBody;