import TeacherCotainer from '../../container/teacher';
import Aside from '../../layout/aside';
import styles from './index.module.css'
type TeacherProps = {}
 
const Teacher:React.FC<TeacherProps> = () => {
    return (
        <div className={styles.teacher}>
            <div className="wrapper">
                <div className={styles.searchForm}>
                    <form action="">
                        <input type="text"  placeholder="Müəlimin adını daxil edin"/>
                        <div className={styles.buttonParent}><button></button></div>
                    </form>
                </div>
                <h3>Bütün müəllimlər</h3>
                <div>
                 <Aside/>
                  <TeacherCotainer/>
                </div>
            </div>
          
        </div>
    );
}
 
 
export default Teacher;