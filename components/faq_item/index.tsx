import { IFaq } from "../../Model/DTO";
import styles from "./index.module.css";
type FaqItemProps = { data: IFaq };

const FaqItem: React.FC<FaqItemProps> = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.faqItem}>
     
      <input type="radio" id={data.id + ""} name="accardion" />
      <label htmlFor={data.id + ""}> <span>{data.question}</span> </label>
      <article>{data.answer}</article>
    </div>
  );
};

export default FaqItem;



