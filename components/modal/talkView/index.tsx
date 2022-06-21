import { useContext } from "react";
import { baseImageUrl } from "../../../Api/agent";
import { UserContext } from "../../../pages/_app";
import { StarSVG } from "../../../svg/starSVG";
import styles from "./index.module.css";
type TalkVIewModalBodyProps = {
  item?: any;
};

const TalkVIewModalBody: React.FC<TalkVIewModalBodyProps> = ({ item }) => {
  const [data, dispatch] = useContext(UserContext);
  return (
    <section className={styles.modalSection}>
      <header>
      <div><img src="/uploads/shape.svg" alt="" /> <span>  {item?.startDate?.split(' ')[0]}</span></div>
       <div><img src="/uploads/shape.svg" alt="" />   <span>{item?.startDate?.split(' ')[1]}</span></div>
      </header>

      <h5>{item?.title}</h5>

      <main className={styles.groupDiv}>
        <div className={styles.imgarea}>
          {
            item?.teacher?.avatar? <img src={baseImageUrl+item.teacher.avatar} alt="" />:   <div style={{background:item?.teacher?.bgColor}} className="avatar">{item?.teacher?.firstName[0] +' '+ item?.teacher?.lastName[0]}</div>
          }
        
        </div>
        <div  className={styles.groupDIvCOntent}>
          <p>{item?.teacher?.firstName + ' '+ item?.teacher?.lastName}</p>
          <span>5</span>
          <span>
            <StarSVG />
          </span>
          <span>İngilis dili</span>
        </div>
      </main>

      <p>4 nəfər</p>

      <main className={styles.connectionPersons}>
        <div>
          <div className="avatar">S S</div>
          <div className={styles.PersonItem}>
            <p>Tural Əliyev</p>
            <span>intermediate</span>
          </div>
        </div>
        <div>
          <div className="avatar">S S</div>
          <div className={styles.PersonItem}>
            <p>Tural Əliyev</p>
            <span>intermediate</span>
          </div>
        </div>
        <div>
          <div className="avatar">S S</div>
          <div className={styles.PersonItem}>
            <p>Tural Əliyev</p>
            <span>intermediate</span>
          </div>
        </div>
        <div>
          <div className="avatar">S S</div>
          <div className={styles.PersonItem}>
            <p >Tural Əliyev</p>
            <span>intermediate</span>
          </div>
        </div>
  
      </main>
          <footer>
          <p>Müzakirə üçün material </p>
        <div>
<a href="">https://www.youtube.com/channel/UCTRHxaeasdbegh...</a></div>
          </footer>
    </section>
  );
};

export default TalkVIewModalBody;
