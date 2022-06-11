import BodySliderItem from '../../components/slider_item/bodySLiderItem';
import styles from './index.module.css'
type TalksContainerProps = {
    width?:string
    list?:any
}
 
const TalksContainer:React.FC<TalksContainerProps> = ({width="70%", list}) => {
    console.log(list, 'list');
    
    return (
        <main className={styles.TalksContainer} style={{width}}>
                  {
                list?.map((item:any)=>(
                <BodySliderItem key={item.uuid} width="360px" item={item}/>
                    ))
           }
        </main>
    );
}
 
 
export default TalksContainer;