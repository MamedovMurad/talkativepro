
import toast from 'react-hot-toast';
import agent from '../../Api/agent';
import { GenericDTO, IEducation } from '../../Model/DTO';
import { EduTypeS } from '../../Model/utils/aside';
import { TrashSVG } from '../../svg/trashSVG';
import styles from './index.module.css'
type TeacherCartItemProps = {
 item:{id:number, title:string, desc:string, uptitle?:number},
 isedit?:boolean,
 callback?:any
}
 
const TeacherCartItem:React.FC<TeacherCartItemProps> = ({item, isedit,callback}) => {
    console.log(item,'item');
    
    async function handleRemove(id:number) {
        let res:GenericDTO<boolean>|null = null
        if (item.uptitle|| item.uptitle===0) {
             res = await agent.teacher.educationRemove(id) 
        }else{
            res =  await agent.teacher.workRemove(id)
        }
   
        if (res?.data) {
            callback&&callback()
           return  toast.success(item.title+' silindi')
        }
    }
    return (
        <div className={styles.TeacherCartItem}>
            {
                isedit&&<span onClick={()=>handleRemove(item.id)}><TrashSVG/></span>}
                <p>{ EduTypeS[item.uptitle==0||item.uptitle? item.uptitle:-1]}</p>
           <h5>{item.title}</h5>
           <h4>{item.desc}</h4>
          
        </div>
    );
}
 
 
export default TeacherCartItem;