import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../../components/slider_item";
type SliderProps = {};

const SliderUI: React.FC<SliderProps> = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className={styles.slider}>
      <div className="wrapper">
        <div className={styles.slideritem_Area}>
          <Slider {...settings}>
            {[1, 2, 3, 4, 6, 7].map((item) => (
              <SliderItem key={item} index={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderUI;
