import { useState } from 'react';
import styles from './index.module.css'
type MainSliderProps = {}
 
const MainSlider:React.FC<MainSliderProps> = () => {
    const [mainSlider, setmainSlider] = useState('/uploads/main_slider.png')
    return (
        <div className={styles.custom_staticLsider}>
        <div className={styles.mainSlider}>
        <img src={mainSlider} alt="" />
        </div>
        <ul>
          <li onClick={()=>setmainSlider('/uploads/slider_1.jpg')}><img src="/uploads/slider_1.jpg" alt="" /></li>
          <li onClick={()=>setmainSlider('/uploads/main_slider.png')}><img src="/uploads/main_slider.png" alt="" /></li>
          <li onClick={()=>setmainSlider('/uploads/slider_1.jpg')}><img src="/uploads/slider_1.jpg" alt="" /></li>
        </ul>
      </div>
    );
}
 
 
export default MainSlider;