type OwnEditTeacherProps = {}
 import styles from './index.module.css'
import PrivateInfoEdit from './privateInfo';
const OwnEditTeacher:React.FC<OwnEditTeacherProps> = () => {
    return (
        <div className={styles.ownTeacheredit}>
             <div className={styles.aside}>
                <ul>
                    <li className={styles.activeli}>Şəxsi məlumatlar</li>
                    <li>Şifrə</li>
                    <li>Bildirişlər</li>
                    <li>Hesabı sil</li>
                </ul>
             </div>

            <div className={styles.maincontent}>
                <PrivateInfoEdit/>
            </div>
        </div>
    );
}
 
 
export default OwnEditTeacher;