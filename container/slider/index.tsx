import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../../components/slider_item";
import { ITeacher } from "../../Model/DTO";
type SliderProps = {
  data?:ITeacher[]|null
};

const SliderUI: React.FC<SliderProps> = ({data}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };
  return (
    <div className={styles.slider}>
      <div className="wrapper">
        <div className={styles.slideritem_Area}>
          <Slider {...settings}>
            {data?.map((item) => (
              <SliderItem key={item.uuid}  item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderUI;
