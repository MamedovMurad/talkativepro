import { useEffect } from "react";
import CustomSlider from "../../../hooks/CustomSlider";
import styles from './index.module.css'
type SliderUIProps = {}
 
const SliderItemUI:React.FC<SliderUIProps> = () => {
    const aalll = CustomSlider(['prtiret.png','portiret.png']);
    useEffect(() => {
    
    }, [aalll])
  

    return (
        <div className={styles.sliderCustom}>
            <img src={'uploads/'+aalll} alt="" />
        </div>
    );
}
 
 
export default SliderItemUI;