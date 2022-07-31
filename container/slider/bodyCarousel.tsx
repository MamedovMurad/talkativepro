import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodySliderItem from "../../components/slider_item/bodySLiderItem";
type BodyCrouselProps = {
    talks?:any
    cb?:any
}
 
const BodyCrousel:React.FC<BodyCrouselProps> = ({talks,cb}) => {
    console.log({talks});
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: talks?.length>3?3:talks?.length,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className={styles.bodyCarousel}>
       
            <Slider {...settings}>
                    {
                        talks?.map((item:any)=>(
                         <BodySliderItem key={item?.id} width={"92%"} item={item} cb={cb}/>
                        ))
                    }
              </Slider> 
            </div>
      
    );
}
 
 
export default BodyCrousel;