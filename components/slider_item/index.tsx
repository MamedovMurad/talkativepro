import styles from "./index.module.css";
import { UserContext } from "../../pages/_app";
import { useContext } from "react";
import UserModalBody from "../modal/usermodal_body";
import { StarSVG } from "../../svg/starSVG";
import { ITeacher } from "../../Model/DTO";
import { baseImageUrl } from "../../Api/agent";
type SliderItemProps = { index?: number , item?:ITeacher};

const SliderItem: React.FC<SliderItemProps> = ({ index , item}) => {
  const [data, dispatch] = useContext(UserContext);
 /*  const router = useRouter() */
  const handleClick = () => {
    dispatch({type:'setModalActive', payload:<UserModalBody uuid={item?.uuid}/>})
    /* router.push('teacher/turalaliyev-12334') */
  }
  return (
    <div className={styles.SliderItem} onClick={handleClick}>
      <div className={styles.imgArea}>
      {
        item?.avatar?<img src={baseImageUrl+item?.avatar} alt="" /> : <div className='avatar'>{item?.firstName[0]+' '+ item?.lastName[0]}</div>
      }  
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
