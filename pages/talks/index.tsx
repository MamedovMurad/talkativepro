import TalksContainer from '../../container/talks';
import Aside from '../../layout/aside';
import styles from './index.module.css'
type TalksProps = {}
 
const Talks:React.FC<TalksProps> = () => {
    return (
        <div className={styles.talks}>
            <div className="wrapper">
               <div>
                  <Aside/>
                <TalksContainer/>
               </div>
            </div>
        </div>
    );
}
 
 
export default Talks;