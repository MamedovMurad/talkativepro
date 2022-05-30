import { StarSVG } from "../../svg/starSVG";
import styles from "./index.module.css";
type TalkHistoryItemProps = {
  width?: string;
};

const TalkHistoryItem: React.FC<TalkHistoryItemProps> = ({
  width = "430px",
}) => {
  return (
    <div className={styles.talkhistoryItem} style={{ width }}>
      <main className={styles.main}>
          <div>

          <div>
          <div>
            <img src="/uploads/shape.svg" alt="" /> <span> 26 fev, 2022</span>
          </div>
          <div>
            <img src="/uploads/shape.svg" alt="" /> <span>15:00</span>
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
          <h5>Həyat tərzi və əyləncə</h5>
    
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
