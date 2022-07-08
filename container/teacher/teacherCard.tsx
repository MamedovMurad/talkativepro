import TeacherCartItem from '../../components/teacher/techerCartItem';
import { IEducation } from '../../Model/DTO';
import styles from './index.module.css'
type TeacherCardContainerProps = {
  data?:IEducation[],
  isedit:boolean,
  callback?:any
}
 
const TeacherCardContainer:React.FC<TeacherCardContainerProps> = ({data, isedit,callback}) => {
    return (
        <div className={styles.teacherCard}>
            {
                data?.map(item=>(
                    <TeacherCartItem key={item.id} item={item} isedit={isedit} callback={callback}/>
                ))
            }
        </div>
    );
}
 
 
export default TeacherCardContainer;