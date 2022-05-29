import styles from "./index.module.css";
import { UserContext } from "../../pages/_app";
import { useContext } from "react";
import UserModalBody from "../modal/usermodal_body";
import { StarSVG } from "../../svg/starSVG";
type SliderItemProps = { index: number };

const SliderItem: React.FC<SliderItemProps> = ({ index }) => {
  const [data, dispatch] = useContext(UserContext);
 /*  const router = useRouter() */
  const handleClick = () => {
    dispatch({type:'setModalActive', payload:<UserModalBody/>})
    /* router.push('teacher/turalaliyev-12334') */
  }
  return (
    <div className={styles.SliderItem} onClick={handleClick}>
      <div className={styles.imgArea}>
        <img src="/uploads/slideritem.png" alt="" />
      </div>
      <div className={styles.content}>
        <h5>Tural Əliyev</h5>
        <p>İngilis dili</p>
      </div>
      <div className={styles.review}>
        <span>5</span>
        <span><StarSVG/></span>
      </div>
    </div>
  );
};

export default SliderItem;
