import { LocationSVG } from '../../../svg/locationSVG';
import { StarSVG } from '../../../svg/starSVG';
import { UsersSVG } from '../../../svg/usersSVG';
import styles from './index.module.css'
type UserModalBodyProps = {}
 
const UserModalBody:React.FC<UserModalBodyProps> = () => {
    return (
        <section className={styles.modulebody}>
            <header>
               <div className={styles.header}>
               <img src="/uploads/prtiret.png" alt="" />
                <div>
                    <p>Aysel Malikova <span>5</span> <StarSVG/></p>
                    <p><span className={styles.users}><UsersSVG/>25 izləyici</span>
                    <span className={styles.location}><LocationSVG/>Azərbaycan</span></p>
               </div>
               </div>
               <div className={styles.buttonArea}>
                   <button>İngilis dili</button>
                   <button>Rus dili</button>
               </div>
            </header>
            <main>
            <div className={styles.videoLinkArea}>
              <iframe
                id="ytplayerteacher"
                className={styles.hello}
                width="100%"
                height="200"
                src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
                frameBorder="0"
              ></iframe>
            </div>
            </main>
            <footer>
                <p>Profilə keçid et</p> <img src="/uploads/rightArrow.svg" alt="" />
            </footer>
        </section>
    );
}
 
 
export default UserModalBody;