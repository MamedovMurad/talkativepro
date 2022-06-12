import { IEducation } from '../../Model/DTO';
import styles from './index.module.css'
type TeacherCartItemProps = {
 item:IEducation
}
 
const TeacherCartItem:React.FC<TeacherCartItemProps> = ({item}) => {
    return (
        <div className={styles.TeacherCartItem}>
           <h5>{item.speciality}</h5>
           <h4>{item.university}</h4>
          
        </div>
    );
}
 
 
export default TeacherCartItem;