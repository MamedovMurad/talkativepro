import GrammerItem from "../../../../components/grammer";
import useResponsivenenessAdjuster from "../../../../hooks/useResponsivenenessAdjuster";
import { GenericListDto, IDocument } from "../../../../Model/DTO";
import styles from './index.module.css'
type QrammaticOrLectureProps = {
    width?:string;
    data:GenericListDto<IDocument[]>|null
}
 
const QrammaticOrLecture:React.FC<QrammaticOrLectureProps> = ({width="79%", data}) => {
    const responsive = useResponsivenenessAdjuster(850)
    return (
        <ul className={styles.grammerContainer}>
            {data?.entities.map((item,i)=>(
                <GrammerItem key={i} item={item} width={responsive?'100%':"520px"}/>
            ))}
        </ul>
    );
}
 
 
export default QrammaticOrLecture;