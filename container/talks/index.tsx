import BodySliderItem from '../../components/slider_item/bodySLiderItem';
import styles from './index.module.css'
type TalksContainerProps = {
    width?:string
}
 
const TalksContainer:React.FC<TalksContainerProps> = ({width="70%"}) => {
    return (
        <main className={styles.TalksContainer} style={{width}}>
                  {
                [1,2,3,4,5,6,7,8,9].map(item=>(
                <BodySliderItem key={item} width="360px"/>
                    ))
           }
        </main>
    );
}
 
 
export default TalksContainer;