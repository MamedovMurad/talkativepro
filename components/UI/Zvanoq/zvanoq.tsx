import { ZvanoqSVG } from "../../../svg/zvanoq";
import styles from './index.module.css'
type ZvanoqUIProps = {
    count?:number
}
 
const ZvanoqUI:React.FC<ZvanoqUIProps> = ({count}) => {
   
    return (
        <span className={styles.zvanoq}>
            {count&&<span>{count}</span>}
            <ZvanoqSVG/>
        </span>
    );
}
 
 
export default ZvanoqUI;