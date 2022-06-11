import ButtonUI from '../UI/Button';
import styles from './index.module.css'
type BodySliderItemProps = {
    width:string;
    item?:any
}
 
const BodySliderItem:React.FC<BodySliderItemProps> = ({width, item}) => {
    return (
        <div className={styles.bodySliderItem} style={{width}}>
           <header className={styles.header}>
               <div className={styles.imageArea}>
                   <img src="/uploads/prtiret.png" alt="" />
               </div>
               <div className={styles.content}>
                   <p>{item?.firstName + ' '+ item?.lastName}</p>
                   <div className={styles.label}><span></span> <span>İngilis dili</span></div>
               </div>
           </header>
           <main className={styles.main}>
               <h5>Həyat tərzi və əyləncə</h5>
               <div>
                   <div><img src="/uploads/shape.svg" alt="" /> <span>  26 fev, 2022</span></div>
                   <div><img src="/uploads/shape.svg" alt="" />   <span>15:00</span></div>
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
                  <button>Sən də qoşul</button>
               </div>
           </footer>
        </div>
    );
}
 
 
export default BodySliderItem;