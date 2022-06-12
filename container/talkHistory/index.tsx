import TalkHistoryItem from "../../components/talkHistoryItem";
import { IOldDoc } from "../../Model/DTO";
import styles from './index.module.css'
type TalkHistoryProps = {
    list?:IOldDoc[]
}
 
const TalkHistory:React.FC<TalkHistoryProps> = ({list}) => {
    return (
        <div className={styles.talkhistoryContainer}>
            {
                list?.map(item=>(
                    <TalkHistoryItem key={item.id} width={'31%'} item={item}/>
                ))
            }
           


        </div>
    );
}
 
 
export default TalkHistory;