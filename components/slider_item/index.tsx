import styles from "./index.module.css";
import { useRouter } from 'next/router'
type SliderItemProps = { index: number };

const SliderItem: React.FC<SliderItemProps> = ({ index }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push('teacher/turalaliyev-12334')
  }
  return (
    <div className={styles.SliderItem} onClick={handleClick}>
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
