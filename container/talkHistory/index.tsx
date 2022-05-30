import TalkHistoryItem from "../../components/talkHistoryItem";
import styles from './index.module.css'
type TalkHistoryProps = {}
 
const TalkHistory:React.FC<TalkHistoryProps> = () => {
    return (
        <div className={styles.talkhistoryContainer}>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>
            <TalkHistoryItem width={'500px'}/>

        </div>
    );
}
 
 
export default TalkHistory;