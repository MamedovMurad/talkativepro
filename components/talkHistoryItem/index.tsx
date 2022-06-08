import { IOldDoc } from "../../Model/DTO";
import { StarSVG } from "../../svg/starSVG";
import styles from "./index.module.css";
type TalkHistoryItemProps = {
  width?: string;
  item?:IOldDoc
};

const TalkHistoryItem: React.FC<TalkHistoryItemProps> = ({
  width = "430px",
  item
}) => {
  return (
    <div className={styles.talkhistoryItem} style={{ width }}>
      <main className={styles.main}>
          <div>

          <div>
          <div>
            <img src="/uploads/shape.svg" alt="" /> <span> {item?.startDate?.split(' ')[0]}</span>
          </div>
          <div>
            <img src="/uploads/shape.svg" alt="" /> <span>{item?.startDate?.split(' ')[1]}</span>
          </div>
        </div>
        <div className={styles.review}>
            <span>5</span>
            <span>
              <StarSVG />
            </span>
          </div>
          </div>
   

        <div className={styles.headerarea}>
          <h5>{item?.title}</h5>
    
        </div>

 
      </main>


      <footer className={styles.footer}>
               <div className={styles.imgs}>
                   <div><img src="/uploads/portiret.png" alt="" /></div>
                   <div><img src="/uploads/portiret.png" alt="" /></div>
                   <div><img src="/uploads/portiret.png" alt="" /></div>
                   <div><img src="/uploads/portiret.png" alt="" /></div>
               </div>
               <div className={styles.buttonArea}>
               
               </div>
           </footer>
    </div>
  );
};

export default TalkHistoryItem;
