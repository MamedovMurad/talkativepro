import BodySliderItem from '../../components/slider_item/bodySLiderItem';
import SpinnerLOader from '../../components/UI/spinner';
import styles from './index.module.css'
type TalksContainerProps = {
    width?:string
    list?:any
}
 
const TalksContainer:React.FC<TalksContainerProps> = ({width="70%", list}) => {
    
    console.log(list,'sadfbdsadfasdfasdf');
    
    return (
        <main className={styles.TalksContainer} style={{width}}>
                  {
                      !list?  <div style={{display:'flex', justifyContent:'center', width:'100%'}}><SpinnerLOader/> </div>:
                list?.map((item:any)=>(
                <BodySliderItem key={item.id} width="360px" item={item}/>
                    ))
           }
        </main>
    );
}
 
 
export default TalksContainer;