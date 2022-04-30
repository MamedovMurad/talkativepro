import styles from "./index.module.css";
type FaqItemProps = { data: { id: number; desc: string; title: string } };

const FaqItem: React.FC<FaqItemProps> = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.faqItem}>
     
      <input type="radio" id={data.id + ""} name="accardion" />
      <label htmlFor={data.id + ""}> <span>{data.title}</span> </label>
      <article>{data.desc}</article>
    </div>
  );
};

export default FaqItem;



