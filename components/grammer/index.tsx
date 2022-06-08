import { DownloadSVGBorder } from '../../svg/downloadSvgBorder';
import styles from './index.module.css'
type GrammerItemProps = {
    title:string;
    width?:string
}
 
const GrammerItem:React.FC<GrammerItemProps> = ({title, width="436px"}) => {
    return (
        <li className={styles.grammeritem} style={{width}}>
            <p>{title}</p>
            <span><DownloadSVGBorder/></span>
        </li>
    );
}
 
 
export default GrammerItem;