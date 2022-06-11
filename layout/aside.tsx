import AsideContainer from "../container/aside";
import { AsideUtils } from "../Model/utils/aside";
import styles from './index.module.css'
type AsideProps = {
    width?: string,
    setList?:any
}
 
const Aside:React.FC<AsideProps> = ({width="29%", setList}) => {

    return (
        <aside className={styles.aside} style={{width}}>
            
            {
                AsideUtils.map((item,index)=>(
                    <AsideContainer key={index} {...item} setList={setList}/>
                ))
            }
        </aside>
    );
}
 
 
export default Aside;