import TeacherCartItem from '../../components/teacher/techerCartItem';
import styles from './index.module.css'
type TeacherCardContainerProps = {
  data:{
    id:number,
    UCdegree?:string,
    title:string,
    desc:string
  }[]
}
 
const TeacherCardContainer:React.FC<TeacherCardContainerProps> = ({data}) => {
    return (
        <div className={styles.teacherCard}>
            {
                data.map(item=>(
                    <TeacherCartItem key={item.id} {...item}/>
                ))
            }
        </div>
    );
}
 
 
export default TeacherCardContainer;