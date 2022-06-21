
import { baseImageUrl } from '../../Api/agent';
import { IDocument } from '../../Model/DTO';
import { DownloadSVGBorder } from '../../svg/downloadSvgBorder';
import styles from './index.module.css'
type GrammerItemProps = {
    item?:IDocument
    width?:string
}
 
const GrammerItem:React.FC<GrammerItemProps> = ({item, width="436px"}) => {
    return (
        <li className={styles.grammeritem} style={{width}} >
            <a href={baseImageUrl+item?.fileName} target="_blank" rel="noopener noreferrer">
            <p>{item?.title}</p>
            <span><DownloadSVGBorder/></span>
            </a>
           
        </li>
    );
}
 
 
export default GrammerItem;