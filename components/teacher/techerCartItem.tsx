
import toast from 'react-hot-toast';
import agent from '../../Api/agent';
import { IEducation } from '../../Model/DTO';
import { EduTypeS } from '../../Model/utils/aside';
import { TrashSVG } from '../../svg/trashSVG';
import styles from './index.module.css'
type TeacherCartItemProps = {
 item:IEducation,
 isedit:boolean,
 callback?:any
}
 
const TeacherCartItem:React.FC<TeacherCartItemProps> = ({item, isedit,callback}) => {
    async function handleRemove(id:number) {
        const res = await agent.teacher.educationRemove(id)
        if (res.data) {
            callback&&callback()
           return  toast.success('Təhsil silindi')
        }
    }
    return (
        <div className={styles.TeacherCartItem}>
            {
                isedit&&<span onClick={()=>handleRemove(item.id)}><TrashSVG/></span>}
                <p>{EduTypeS[item.educationLevel]}</p>
           <h5>{item.speciality}</h5>
           <h4>{item.university}</h4>
          
        </div>
    );
}
 
 
export default TeacherCartItem;