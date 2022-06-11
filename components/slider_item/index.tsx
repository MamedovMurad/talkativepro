import styles from "./index.module.css";
import { UserContext } from "../../pages/_app";
import { useContext } from "react";
import UserModalBody from "../modal/usermodal_body";
import { StarSVG } from "../../svg/starSVG";
import { ITeacher } from "../../Model/DTO";
type SliderItemProps = { index?: number , item?:ITeacher};

const SliderItem: React.FC<SliderItemProps> = ({ index , item}) => {
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
        <h5>{item?.firstName+' '+ item?.lastName}</h5>
        {item?.languages?.map(item=>(
          <p key={item.id}>{item.name}</p>
        ))}
        
      </div>
      <div className={styles.review}>
        <span>{item?.rating}</span>
        <span><StarSVG/></span>
      </div>
    </div>
  );
};

export default SliderItem;
