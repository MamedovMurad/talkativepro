import ButtonUI from "../components/UI/Button";
import AsideContainer from "../container/aside";
import { AsideUtils } from "../Model/utils/aside";
import { CloseSVG } from "../svg/closeSVG";
import styles from './index.module.css'
type AsideProps = {
    width?: string,
    setList?:any
    list?:any
    filter?:any;
    setfilter?:any;
    reset?:any
}
 
const Aside:React.FC<AsideProps> = ({width="25%", setList, list,filter, setfilter,reset}) => {
function handleClick(){
    
    
    setfilter&&setfilter()
}
    
    
    return (
        <aside className={`${styles.aside} ${filter? styles.activeAside:styles.PassiveAside}`} style={{width}} >
            <header>
                <p>Filter</p>
                <span onClick={handleClick}><CloseSVG color="#999999"/></span>
            </header>
       <section>
       {
                list?.map((item:any,index:number)=>(
                  <AsideContainer key={index} {...item} setList={setList}/>
                ))
            }
       </section>

            <div className={styles.buttonsBottom}>
                <ButtonUI text="Tətbiq et" width="100%" onclick={handleClick}/>
                <ButtonUI text="Sıfırla" width="100%" color="white" font="#474747" onclick={reset}/>
            </div>
        </aside>
    );
}
 
 
export default Aside;