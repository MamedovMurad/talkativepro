import SliderItem from '../../components/slider_item';
import { ITeacher } from '../../Model/DTO';
import styles from './index.module.css'
type TeacherCotainerProps = {
    list?:ITeacher[],
    
}
 
const TeacherCotainer:React.FC<TeacherCotainerProps> = ({list}) => {
    return (
        <main  className={styles.teacherContainer}>
           {
                list?.map(item=>(
                <SliderItem key={item.uuid} item={item}/>
                    ))
           }
        </main>
    );
}
 
 
export default TeacherCotainer;