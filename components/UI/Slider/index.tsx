import { useEffect, useState } from "react";
import agent, { baseImageUrl } from "../../../Api/agent";
import CustomSlider from "../../../hooks/CustomSlider";
import styles from './index.module.css'
type SliderUIProps = {}
 
const SliderItemUI:React.FC<SliderUIProps> = () => {
    const [teacherImage, setteacherImage] = useState<any[]>([])
    const aalll = CustomSlider(teacherImage);
    async function fetchTopTeacher() {
        const res = await agent.teacher.topList()
        console.log(res,'ppp');
        console.log(res.data,'ooooooooooo');
        res.data&& setteacherImage(res.data?.filter(item=>{
            if (item.avatar) {
                return item
            }
        })?.map(item=>item.avatar)
        )}
        console.log(baseImageUrl+aalll,'jj');
        
    useEffect(() => {
        fetchTopTeacher()
    }, [])
  


    return (
        <div className={styles.sliderCustom}>
            <img src={baseImageUrl+aalll} alt="" />
        </div>
    );
}
 
 
export default SliderItemUI;