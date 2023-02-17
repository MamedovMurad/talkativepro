import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../../components/slider_item";
import { ITeacher } from "../../Model/DTO";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
type SliderProps = {
  data?: ITeacher[] | null;
};

const SliderUI: React.FC<SliderProps> = ({ data }) => {
  const responsive = useResponsivenenessAdjuster(800);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      data?.length !== undefined && data.length > 3 ? 4 : data?.length,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.slider}>
      <div className="wrapper">
        <div className={styles.slideritem_Area}>
          {!responsive ? (
            <Slider {...settings}>
              {data?.map((item) => (
                <SliderItem key={item.uuid} item={item} />
              ))}
            </Slider>
          ) : (
            <div className={styles.mobileSlider}>
              {data?.map((item) => (
                <SliderItem key={item.uuid} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderUI;
