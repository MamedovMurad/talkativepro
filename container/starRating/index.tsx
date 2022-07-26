import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import agent from "../../Api/agent";
import ButtonUI from "../../components/UI/Button";
import { UserContext } from "../../pages/_app";
import styles from "./index.module.css";
type StarRatingProps = {
  text?: string;
  id:number,
};

const StarRating: React.FC<StarRatingProps> = ({
  text = "Söhbətin qiymətləndirilməsi",
  id
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [data, dispatch] = useContext(UserContext);
  async function onsubmitHandle(params: any) {
      params.path=id
      console.log(params);
      params.value=params.stars
      const res = await agent.talk.assessment(params)
      if (res) {
     toast.success('Qiymətləndirildi')
        return  dispatch({type:'setModalpassive'})
      }
  
  }
  return (
    <section className={styles.parentsection}>
      <h4>{text}</h4>
      <form id="givePrice"
        className={styles["rating"]}
        onSubmit={handleSubmit(onsubmitHandle)}
      >
        <label>
          <input type="radio"  value="1" {...register('stars')}/>
          <span className={styles.icon}>★</span>
        </label>
        <label>
          <input type="radio" {...register('stars')} value="2" />
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
        </label>
        <label>
          <input type="radio" {...register('stars')} value="3" />
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
        </label>
        <label>
          <input type="radio" {...register('stars')} value="4" />
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
        </label>
        <label>
          <input type="radio" {...register('stars')} value="5" />
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
          <span className={styles.icon}>★</span>
        </label>
      </form>
      <div className={styles.buttonArea}>
        <ButtonUI text="Təsdiqlə" form="givePrice" />
      </div>
    </section>
  );
};

export default StarRating;
