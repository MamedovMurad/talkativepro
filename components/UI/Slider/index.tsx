import { allowSelection } from "@fullcalendar/core";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import agent, { baseImageUrl } from "../../../Api/agent";
import CustomSlider from "../../../hooks/CustomSlider";
import { ITeacher } from "../../../Model/DTO";
import { UserContext } from "../../../pages/_app";
import UserModalBody from "../../modal/usermodal_body";
import styles from './index.module.css'
type SliderUIProps = {}
 
const SliderItemUI:React.FC<SliderUIProps> = () => {
    const [data, dispatch] = useContext(UserContext);
    const [teacherImage, setteacherImage] = useState<ITeacher[]>([])
    const aalll = CustomSlider(teacherImage);
    async function fetchTopTeacher() {
        const res = await agent.teacher.topList()
        res.data&& setteacherImage(res.data?.filter(item=>{
            if (item.avatar) {
                return item
            }
        })
        )}
        
  
        /*  const router = useRouter() */
         const handleClick = () => {
           dispatch({type:'setModalActive', payload:<UserModalBody uuid={aalll?.uuid}/>})
           /* router.push('teacher/turalaliyev-12334') */
         }
    useEffect(() => {
        fetchTopTeacher()
    }, [])
  


    return (
        <div className={styles.sliderCustom} onClick={handleClick}>
            <Image src={baseImageUrl+aalll?.avatar} alt="slider-image" height="100%" width="100%" style={{objectFit:'cover'}}/>
          {/*   <img src={baseImageUrl+aalll} alt="" /> */}
        </div>
    );
}
 
 
export default SliderItemUI;