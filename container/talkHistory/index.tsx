import TalkHistoryItem from "../../components/talkHistoryItem";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
import { IOldDoc } from "../../Model/DTO";
import styles from './index.module.css'
type TalkHistoryProps = {
    list?:IOldDoc[]
}
 
const TalkHistory:React.FC<TalkHistoryProps> = ({list}) => {
const responsive = useResponsivenenessAdjuster(850)
    return (
        <div className={styles.talkhistoryContainer}>
            {
                list?.map(item=>(
                    <TalkHistoryItem key={item.id} width={responsive? '100%': '31%'} item={item}/>
                ))
            }
           


        </div>
    );
}
 
 
export default TalkHistory;