import GrammerItem from "../../../../components/grammer";
import { GenericListDto, IDocument } from "../../../../Model/DTO";
import styles from './index.module.css'
type QrammaticOrLectureProps = {
    width?:string;
    data:GenericListDto<IDocument[]>|null
}
 
const QrammaticOrLecture:React.FC<QrammaticOrLectureProps> = ({width="79%", data}) => {
    return (
        <ul className={styles.grammerContainer}>
            {data?.entities.map((item,i)=>(
                <GrammerItem key={i} title={item.title} width="520px"/>
            ))}
        </ul>
    );
}
 
 
export default QrammaticOrLecture;