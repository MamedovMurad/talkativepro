import AsideContainer from "../container/aside";
import { AsideUtils } from "../Model/utils/aside";
import styles from './index.module.css'
type AsideProps = {
    width?: string
}
 
const Aside:React.FC<AsideProps> = ({width="29%"}) => {

    return (
        <aside className={styles.aside} style={{width}}>
            
            {
                AsideUtils.map((item,index)=>(
                    <AsideContainer key={index} {...item}/>
                ))
            }
        </aside>
    );
}
 
 
export default Aside;