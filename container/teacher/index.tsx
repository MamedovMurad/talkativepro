import SliderItem from '../../components/slider_item';
import styles from './index.module.css'
type TeacherCotainerProps = {}
 
const TeacherCotainer:React.FC<TeacherCotainerProps> = () => {
    return (
        <main  className={styles.teacherContainer}>
           {
                [1,2,3,4,5,6,7,8,9].map(item=>(
                <SliderItem key={item} index={item}/>
                    ))
           }
        </main>
    );
}
 
 
export default TeacherCotainer;