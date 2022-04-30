import styles from "./index.module.css";
type SliderItemProps = { index: number };

const SliderItem: React.FC<SliderItemProps> = ({ index }) => {
  return (
    <div className={styles.SliderItem}>
      <div className={styles.imgArea}>
        <img src="/uploads/slideritem.png" alt="" />
      </div>
      <div className={styles.content}>
        <h5>Tural Əliyev</h5>
        <p>İngilis dili</p>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default SliderItem;
