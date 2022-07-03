import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodySliderItem from "../../components/slider_item/bodySLiderItem";
type BodyCrouselProps = {
    talks?:any
}
 
const BodyCrousel:React.FC<BodyCrouselProps> = ({talks}) => {
    console.log({talks});
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: talks?.length>3?3:talks?.length,
        slidesToScroll: 2,
      };
    return (
        <div className={styles.bodyCarousel}>
       
            <Slider {...settings}>
                    {
                        talks?.map((item:any)=>(
                         <BodySliderItem key={item?.id} width={"364px"} item={item}/>
                        ))
                    }
              </Slider> 
            </div>
      
    );
}
 
 
export default BodyCrousel;