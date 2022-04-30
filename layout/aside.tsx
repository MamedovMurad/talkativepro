import AsideContainer from "../container/aside";
import { AsideUtils } from "../Model/utils/aside";
import styles from './index.module.css'
type AsideProps = {}
 
const Aside:React.FC<AsideProps> = () => {

    return (
        <aside className={styles.aside}>
            
            {
                AsideUtils.map((item,index)=>(
                    <AsideContainer key={index} {...item}/>
                ))
            }
        </aside>
    );
}
 
 
export default Aside;