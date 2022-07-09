import BodySliderItem from '../../components/slider_item/bodySLiderItem';
import SpinnerLOader from '../../components/UI/spinner';
import useResponsivenenessAdjuster from '../../hooks/useResponsivenenessAdjuster';
import styles from './index.module.css'
type TalksContainerProps = {
    width?:string
    list?:any
    itemWidth?:string
}
 
const TalksContainer:React.FC<TalksContainerProps> = ({width="74%", list, itemWidth}) => {
    
    const responsive = useResponsivenenessAdjuster(810)
    const tablet = useResponsivenenessAdjuster(860)
    return (
        <main className={styles.TalksContainer} style={ useResponsivenenessAdjuster(920)?{width:'100%'}:{width}}>
                  {
                      !list?  <div style={{display:'flex', justifyContent:'center', width:'100%'}}><SpinnerLOader/> </div>:
               
                      list?.map((item:any)=>(
                         <BodySliderItem key={item.id} width={(responsive&& !tablet)? '94%':(!responsive&&tablet)?  '310px':itemWidth||'360px'} item={item} />
                    ))
           }
        </main>
    );
}
 
 
export default TalksContainer;