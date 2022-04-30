import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodySliderItem from "../../components/slider_item/bodySLiderItem";
type BodyCrouselProps = {}
 
const BodyCrousel:React.FC<BodyCrouselProps> = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.0,
        slidesToScroll: 1,
      };
    return (
        <div className={styles.bodyCarousel}>
       
            <Slider {...settings}>
                    {
                        [1,2,3,4,5].map(index=>(
                         <BodySliderItem key={index} width={"364px"}/>
                        ))
                    }
              </Slider> 
            </div>
      
    );
}
 
 
export default BodyCrousel;