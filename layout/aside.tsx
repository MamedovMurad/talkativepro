import AsideContainer from "../container/aside";
import { AsideUtils } from "../Model/utils/aside";
import styles from './index.module.css'
type AsideProps = {
    width?: string,
    setList?:any
    list:any
}
 
const Aside:React.FC<AsideProps> = ({width="29%", setList, list}) => {

    console.log({list});
    
    return (
        <aside className={styles.aside} style={{width}}>
            
            {
                list?.map((item:any,index:number)=>(
                  <AsideContainer key={index} {...item} setList={setList}/>
                ))
            }
        </aside>
    );
}
 
 
export default Aside;