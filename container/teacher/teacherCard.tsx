import TeacherCartItem from '../../components/teacher/techerCartItem';
import { IEducation } from '../../Model/DTO';
import styles from './index.module.css'
type TeacherCardContainerProps = {
  data?:IEducation[]
}
 
const TeacherCardContainer:React.FC<TeacherCardContainerProps> = ({data}) => {
    return (
        <div className={styles.teacherCard}>
            {
                data?.map(item=>(
                    <TeacherCartItem key={item.id} item={item}/>
                ))
            }
        </div>
    );
}
 
 
export default TeacherCardContainer;